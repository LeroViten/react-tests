import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

const fetchInfo = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export function fetchAuthors() {
  return fetchInfo('/authors?_embed=books');
}

export function fetchBooks() {
  return fetchInfo('/books');
}

export function fetchBookById(bookId) {
  return fetchInfo(`/books/${bookId}?_expand=author`);
}
