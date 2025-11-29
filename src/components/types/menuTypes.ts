import { UrlObject } from 'node:url';

import { HTMLAttributeAnchorTarget, ReactNode } from 'react';

type Url = string | UrlObject;

interface NavMenuItem {
  id: string;
  children: ReactNode;
  href: Url;
  activeMenuName?: string;
  target?: HTMLAttributeAnchorTarget;
}

interface ActiveMenuItem {
  activeMenu?: string;
}

interface NavMenu extends NavMenuItem, ActiveMenuItem {}

interface AppMenu {
  main: NavMenuItem[];
  footer: NavMenuItem[];
}

export type { ActiveMenuItem, AppMenu, NavMenu, NavMenuItem, Url };
