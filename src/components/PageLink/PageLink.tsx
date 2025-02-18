import { AnchorHTMLAttributes, DetailedHTMLProps, JSX } from 'react';

import cn from 'classnames';

function PageLink(props: Readonly<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>>): JSX.Element {
  const { children, className, ...rest } = props;

  return (
    <a className={cn('text-link hover:underline hover:decoration-dotted', className)} {...rest}>
      {children}
    </a>
  );
}

export default PageLink;
