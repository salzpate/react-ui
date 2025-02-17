import { JSX, PropsWithChildren } from 'react';

import cn from 'classnames';

interface ButtonLinkProps {
  href?: string;
  target?: string;
  className?: string;
}

function ButtonLink(props: Readonly<PropsWithChildren<ButtonLinkProps>>): JSX.Element {
  const { href, className, children, target } = props;

  return (
    <a
      className={cn("bg-transparent text-secondary text-sm uppercase tracking-wider py-2 px-4 border border-secondary rounded-sm transition ease-in-out duration-150 hover:bg-secondary/15 hover:no-underline dark:border-secondary-dark dark:hover:bg-secondary-dark dark:hover:text-gray-100", className)}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

export default ButtonLink;