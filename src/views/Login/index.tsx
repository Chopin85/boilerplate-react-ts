import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Home = ({ className }: Props) => {
  return (
    <div className={classNames(styles.root, className)}>
      <h2>Login</h2>
    </div>
  );
};

export default Home;
