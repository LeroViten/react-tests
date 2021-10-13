import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import * as bookAPI from '../services/booksApi';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/BookPage/BookPage.scss';
import PageHeading from '../components/PageHeading/PageHeading';

export default function BooksPage() {
  const { url } = useRouteMatch();
  const [books, setBooks] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    setTimeout(() => {
      bookAPI.fetchBooks().then(setBooks);
      setStatus('resolved');
    }, 1000);
  }, []);
  return (
    <>
      <PageHeading text="Books" />

      {status === 'pending' && (
        <Loader
          className="Loader"
          type="ThreeDots"
          color="#b00b69"
          height={100}
          width={100}
          timeout={1000}
        />
      )}

      {books && (
        <ul className="bookGallery">
          {books.map(book => (
            <li key={book.id} className="bookGalleryItem">
              <Link to={`${url}/${book.id}`}>
                <img src={book.imgUrl} alt={book.title} className="bookGalleryItem__image" />
                <p className="bookGalleryItem__title">{book.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
