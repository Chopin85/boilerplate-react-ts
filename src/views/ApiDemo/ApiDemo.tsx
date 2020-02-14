import React from 'react';
import BooksList from './BooksList';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const ApiDemo = ({ className }: Props) => (
  <div className={classNames(styles.root, className)}>
    <div className={styles.apiDemoHeader}>API Demo with Redux thunk</div>
    <div className={styles.apiDemoContent}>
      <BooksList />
    </div>
  </div>
);

export default ApiDemo;
