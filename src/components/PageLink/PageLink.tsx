import { AnchorHTMLAttributes, DetailedHTMLProps, JSX } from 'react';

import { cn } from '../../utils';

function PageLink(props: Readonly<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>): JSX.Element {
  const { children, className, ...rest } = props;

  return (
    <a className={cn('text-link dark:text-link-dark dark:hover:text-link-dark-hover hover:underline hover:decoration-dotted', className)} {...rest}>
      {children}
    </a>
  );
}

export default PageLink;
