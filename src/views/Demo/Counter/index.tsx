import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import DrawerButton from 'components/Buttons/DrawerButton';

interface Props {
  className?: string;
  counter: number;
}

const Counter = ({ counter, className }: Props) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div>Check the Redux Devtools to see the dispatched actions.</div>
      <a
        href="https://github.com/zalmoxisus/redux-devtools-extension"
        target="_blank"
        rel="noopener noreferrer"
      >
        (link)
      </a>
      <div className={styles.counter}>{counter}</div>
      <DrawerButton />
    </div>
  );
};

export default Counter;
