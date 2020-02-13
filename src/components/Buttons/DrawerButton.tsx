import React from 'react';
import { openDrawer } from '../../store/drawer/actions';
import { useDispatch } from 'react-redux';
import Button from './Button';

const DrawerButton = () => {
  const dispatch = useDispatch();
  return <Button onClick={() => dispatch(openDrawer())} text="Open Drawer !" />;
};

export default DrawerButton;
