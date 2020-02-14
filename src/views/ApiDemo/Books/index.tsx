import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  name: string;
  className?: string;
}

const Book = ({ name, className }: Props) => {
  return (
    <div className={classNames(styles.root, className)}>
      <div>{name}</div>
    </div>
  );
};

export default Book;
