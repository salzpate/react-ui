import Link from 'next/link';
import { JSX } from 'react';

import { Url } from '../types/menuTypes';

interface OpenPageLinkProps {
  href: Url;
  text?: string;
}

function OpenPageLink(props: Readonly<OpenPageLinkProps>): JSX.Element {
  const { href, text = 'Weitere Informationen' } = props;

  return (
    <Link href={href} className="text-link dark:text-link-dark dark:hover:text-link-dark-hover inline-flex items-center gap-0 hover:gap-1 hover:underline hover:decoration-dotted">
      <span>{text}</span>
      <svg className="ml-1 h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

export default OpenPageLink;
