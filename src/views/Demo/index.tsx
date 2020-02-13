import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
// import MainDrawer from '../../shared/Drawers/MainDrawer';
import Counter from './Counter';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { RootState } from 'store/index';

interface Props {
  className?: string;
}

const Demo = ({ className }: Props) => {
  const selectValue = (state: RootState) => state.counter.counter;
  const value = useSelector(selectValue, shallowEqual);

  return (
    <div className={classNames(styles.root, className)}>
      <Counter counter={value} />
      {/* <MainDrawer /> */}
    </div>
  );
};

export default Demo;
