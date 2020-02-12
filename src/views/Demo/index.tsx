import React from 'react';
// import MainDrawer from '../../shared/Drawers/MainDrawer';
import Counter from './Counter';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Demo = ({ className }: Props) => (
  <div className={classNames(styles.root, className)}>
    <Counter counter={13} />
    {/* <MainDrawer /> */}
  </div>
);

export default Demo;
