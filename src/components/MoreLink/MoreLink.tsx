/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { JSX, PropsWithChildren, ReactNode } from 'react';

import { cn } from '../../utils';
import { OpenPageLink } from '../OpenPageLink';
import { Url } from '../types/menuTypes';

interface MoreLinkProps {
  href: Url;
  headline?: ReactNode;
  linkText?: string;
  imgSrc?: string;
}

function MoreLink(props: Readonly<PropsWithChildren<MoreLinkProps>>): JSX.Element {
  const { href, headline, imgSrc, linkText = 'Weitere Informationen', children } = props;

  return (
    <div>
      {imgSrc && (
        <Link href={href}>
          <img src={imgSrc} width="100%" className="images-dark" alt={headline as string} />
        </Link>
      )}
      {headline && <h3 className={cn('text-lg tracking-tight text-gray-900 uppercase sm:text-xl lg:text-2xl lg:font-medium dark:text-gray-200', { 'mt-4': imgSrc })}>{headline}</h3>}
      <div className="my-4 text-sm font-light lg:text-base lg:font-normal">{children}</div>
      <div className="my-4">
        <OpenPageLink href={href} text={linkText} />
      </div>
    </div>
  );
}

export default MoreLink;
