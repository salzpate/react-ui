import React from 'react';
import Link from 'next/link';
import { NavMenu } from '../../commons';

export type FooterLinkProps = NavMenu;

function FooterLink(props: FooterLinkProps): JSX.Element {
  const { href, children } = props;
  return (
    <Link href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="inline-flex items-center justify-center px-2 py-2 text-sm tracking-widest rounded-md text-gray-400 shadow-sm transition ease-in-out duration-150 my-2 sm:my-0 hover:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-600 dark:focus:bg-gray-700">
        {children}
      </a>
    </Link>
  );
}
export default FooterLink;
