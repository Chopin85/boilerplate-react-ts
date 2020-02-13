import {
  DrawerState,
  DrawerActionTypes,
  OPEN_DRAWER,
  CLOSE_DRAWER
} from './types';

const initialState: DrawerState = {
  isOpen: false
};

export function drawerReducer(
  state = initialState,
  action: DrawerActionTypes
): DrawerState {
  switch (action.type) {
    case OPEN_DRAWER:
      return { ...state, isOpen: true };
    case CLOSE_DRAWER:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}
