import { OPEN_DRAWER, CLOSE_DRAWER, DrawerActionTypes } from './types';

export function openDrawer(): DrawerActionTypes {
  return {
    type: OPEN_DRAWER
  };
}

export function closeDrawer(): DrawerActionTypes {
  return {
    type: CLOSE_DRAWER
  };
}
