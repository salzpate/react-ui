/* eslint-disable @next/next/no-img-element */
import { JSX, PropsWithChildren, ReactNode } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { Url } from '../types/menuTypes';

interface MoreLinkProps {
  href: Url;
  headline?: ReactNode;
  imgSrc?: string;
}

function MoreLink(props: Readonly<PropsWithChildren<MoreLinkProps>>): JSX.Element {
  const { href, headline, imgSrc, children } = props;

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
        <Link href={href} legacyBehavior>
          <a className="inline-flex items-center gap-0 text-link hover:gap-1 hover:underline hover:decoration-dotted dark:text-link-dark dark:hover:text-link-dark-hover">
            <span>Weitere Informationen</span>
            <svg className="ml-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default MoreLink;
