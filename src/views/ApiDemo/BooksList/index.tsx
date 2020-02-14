import React from 'react';
import { fetchBooks } from '../../../store/api/actions';
import Book from '../Books';
import Spinner from 'components/Spinner';
import Button from 'components/Buttons/Button';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { RootState } from 'store/index';

interface Props {
  className?: string;
}

const BooksList = ({ className }: Props) => {
  const dispatch = useDispatch();

  const selectApiState = (state: RootState) => state.api;
  const { isLoadingBooks, books } = useSelector(selectApiState, shallowEqual);

  const Books = isLoadingBooks ? (
    <Spinner />
  ) : (
    books.map(book => <Book key={book.url} name={book.name} />)
  );

  return (
    <div className={classNames(styles.root, className)}>
      <div>with React hooks (functional component)</div>
      <div className={styles.listHeader}>
        <div className={styles.listTitl}>Books</div>
        <Button onClick={() => dispatch(fetchBooks())} text="Refresh" />
      </div>
      {Books}
    </div>
  );
};

export default BooksList;
