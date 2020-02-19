import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  onClick: () => void;
}

const Menu = ({ className, onClick }: Props, ref: any) => {
  return (
    <div ref={ref} className={classNames(styles.root, className)}>
      <Link onClick={onClick} className={styles.link} to="/">
        Home
      </Link>
      <Link onClick={onClick} className={styles.link} to="/demo">
        Demo Page
      </Link>
      <Link onClick={onClick} className={styles.link} to="/apidemo">
        API demo
      </Link>
    </div>
  );
};
export default React.forwardRef(Menu);
