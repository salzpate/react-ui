import { JSX, PropsWithChildren } from 'react';

import { cn } from '../../utils';

interface ButtonLinkProps {
  href?: string;
  target?: string;
  className?: string;
}

function ButtonLink(props: Readonly<PropsWithChildren<ButtonLinkProps>>): JSX.Element {
  const { href, className, children, target } = props;

  return (
    <a
      className={cn(
        'rounded-sm border border-link bg-transparent px-4 py-2 text-sm tracking-wider text-link uppercase transition duration-150 ease-in-out hover:bg-link/15 hover:no-underline dark:border-link-dark dark:hover:bg-link-dark dark:hover:text-link-dark-hover',
        className,
      )}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
