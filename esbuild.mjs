import glob from 'glob';
import { build } from 'esbuild';
import postCssPlugin from './esbuild.postcss.js';
import fileImport from './esbuild.fileImport.js';
import svgr from 'esbuild-plugin-svgr';
import cssNested from 'postcss-nested';
import cssFocusVisible from 'postcss-focus-visible';
import tailwindcss from 'tailwindcss';
import tailwindConfig from './tailwind.config.js';
import autoprefixer from 'autoprefixer';
import { nodeExternalsPlugin } from 'esbuild-node-externals';

const allSrcFiles = glob.sync('./src/**/*+(.ts|.tsx|.css|.svg|.png|.jpg|.jpeg|.gif)');
const documentationFiles = glob.sync('./src/**/*documentation*/*');
const typeDefinitionFiles = glob.sync('./src/**/*+(.d.ts)');
const excludeFiles = [...documentationFiles, ...typeDefinitionFiles];
const entryPoints = allSrcFiles.filter(item => !excludeFiles.includes(item));

const commonOptions = {
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outbase: './src',
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  loader: { '.png': 'dataurl' },
  plugins: [
    nodeExternalsPlugin(),
    fileImport(),
    postCssPlugin({
      inject: false,
      plugins: [cssNested, cssFocusVisible, tailwindcss(tailwindConfig), autoprefixer],
    }),
    svgr({
      template: ({ template }, opts, { imports, interfaces, componentName, props, jsx, exports }) => {
        const plugins = ['jsx'];
        if (opts.typescript) {
          plugins.push('typescript');
        }
        const typeScriptTpl = template.smart({ plugins });
        return typeScriptTpl.ast`${imports}
          ${interfaces}
          export function ReactComponent (${props}) {
            return ${jsx};
          }
          `;
      },
    }),
  ],
};

const cjsOptions = {
  ...commonOptions,
  format: 'cjs',
  target: ['esnext'],
  outdir: './dist/cjs',
};

const esmOptions = {
  ...commonOptions,
  format: 'esm',
  splitting: true,
  target: ['esnext'],
  outdir: './dist/esm',
};

build(cjsOptions).catch(e => {
  process.exit(1);
});
build(esmOptions).catch(e => {
  process.exit(1);
});
