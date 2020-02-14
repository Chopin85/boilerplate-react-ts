import api from 'services/api';

const BOOKS_ROUTE = '/api/books';

const bookService = {
  async getBooks() {
    return api.get(`${BOOKS_ROUTE}`);
  }
};

export default bookService;
