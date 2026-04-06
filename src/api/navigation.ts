import type { NavMenu } from '../types';
import navMenuData from '../data/navigation.json';

export async function fetchNavMenu(): Promise<NavMenu> {
  await new Promise((r) => setTimeout(r, 50));
  return navMenuData as NavMenu;
}
