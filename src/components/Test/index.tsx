import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

interface Props {
  className?: string;
  labels?: string[];
}

const Test = ({ className, labels = [] }: Props) => {
  const LabelLists = labels.map((label, index) => (
    <div className={styles.label} key={index}>
      <h1>{label}</h1>
    </div>
  ));
  return (
    <div className={classNames(styles.root, className)}>
      {labels && LabelLists}
      <div className={styles.header}>Header</div>
      <div className={styles.view}>
        <div className={styles.bg}>
          <div className={styles.page}>
            <p>Page</p>
            <p>Page</p>
          </div>
        </div>
        <div className={styles.clearfix} />
      </div>
    </div>
  );
};

export default Test;
