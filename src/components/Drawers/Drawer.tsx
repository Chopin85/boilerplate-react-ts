import React from 'react';
import { closeDrawer } from '../../store/drawer/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'store/index';
import CloseButton from '../Buttons/CloseButton';
import './Drawer.css';

interface Props {
  content: any;
  headerContent: any;
}

const Drawer = ({ headerContent, content }: Props) => {
  const dispatch = useDispatch();

  const selectIsOpen = (state: RootState) => state.counter.counter;
  const isOpen = useSelector(selectIsOpen, shallowEqual);

  if (!isOpen) {
    return <section className="drawer" />;
  }

  return (
    <section className="drawer open">
      <div className="drawerHeader">
        {headerContent}
        <CloseButton onClick={() => dispatch(closeDrawer())} />
      </div>
      <div className="drawerContent">{content}</div>
    </section>
  );
};

export default Drawer;
