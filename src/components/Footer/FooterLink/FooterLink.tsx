import { JSX } from 'react';

import Link from 'next/link';
import { NavMenu } from '../../types';

function FooterLink(props: Readonly<NavMenu>): JSX.Element {
  const { href, children, target } = props;

  return (
    <Link href={href} target={target} legacyBehavior>
      <a
        target={target}
        className="inline-flex items-center justify-center px-2 py-2 text-sm tracking-widest rounded-md text-gray-400 shadow-xs transition ease-in-out duration-150 my-2 sm:my-0 hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-hidden focus:bg-gray-600 dark:focus:bg-gray-700"
      >
        {children}
      </a>
    </Link>
  );
}
export default FooterLink;
