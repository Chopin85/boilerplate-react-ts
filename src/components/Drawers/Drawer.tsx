import React from 'react';
import { closeDrawer } from '../../store/drawer/actions';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from 'store/index';
import CloseButton from '../Buttons/CloseButton';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  content: any;
  headerContent: any;
  className?: string;
}

const Drawer = ({ className, headerContent, content }: Props) => {
  const dispatch = useDispatch();

  const selectIsOpen = (state: RootState) => state.drawer.isOpen;
  const isOpen = useSelector(selectIsOpen, shallowEqual);

  if (!isOpen) {
    return <section className={classNames(styles.root, className)} />;
  }

  return (
    <section className={classNames(styles.root, styles.open)}>
      <div className={styles.drawerHeader}>
        {headerContent}
        <CloseButton onClick={() => dispatch(closeDrawer())} />
      </div>
      <div className={styles.drawerContent}>{content}</div>
    </section>
  );
};

export default Drawer;
