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
        'border-link text-link hover:bg-link/15 dark:border-link-dark dark:hover:bg-link-dark dark:hover:text-link-dark-hover rounded-sm border bg-transparent px-4 py-2 text-sm tracking-wider uppercase transition duration-150 ease-in-out hover:no-underline',
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
