import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';
import classNames from 'classnames';
import logo from './assets/logo.svg';

interface Props {
  className?: string;
}

const Header = ({ className }: Props) => (
  <div className={classNames(styles.root, className)}>
    <header className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className={styles.link}
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Link className={styles.link} to="/demo">
        Demo Page
      </Link>
      <Link className={styles.link} to="/apidemo">
        API demo
      </Link>
    </header>
  </div>
);
export default Header;
