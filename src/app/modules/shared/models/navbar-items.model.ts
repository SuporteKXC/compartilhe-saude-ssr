import { MenuItem } from 'primeng/api';

export type NavBarItem = ActiveRoute | SubRouteItem;

export interface SubRouteItem {
  label: string;
  subRoutes: ActiveRoute[];
  menuModel?: MenuItem[];
  icon?: string;
  datatestid?: string;
}

export interface ActiveRoute {
  label: string;
  path?: string;
  icon?: string;
  otherPatternsToMatch?: RegExp[];
  datatestid?: string;
  fragment?: string;
  handleClick?: VoidFunction;
  href?: string;
}

export function isSubrouteItem(item: NavBarItem): item is SubRouteItem {
  return item && Object.hasOwn(item, 'subRoutes');
}

export function anyItemSubrouteActive(item: SubRouteItem, activeRoute: string): boolean {
  return item.subRoutes.some((subRoute) => subRoute.path === activeRoute);
}

export function shouldItemBeActive(item: NavBarItem, activeRoute: string): boolean {
  if (isSubrouteItem(item)) return anyItemSubrouteActive(item, activeRoute);

  const path = item.fragment ? `${item.path}${'#' + item.fragment}` :  item.path; 

  return (
    (activeRoute === path ||
      item.otherPatternsToMatch?.some((path) => path.test(activeRoute))) ??
    false
  );
}
