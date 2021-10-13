import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import * as bookAPI from '../services/booksApi';
import '../styles/BookDetailsPage/BookDetailsPage.scss';

export default function BookDetailsView() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    bookAPI.fetchBookById(bookId).then(setBook);
  }, [bookId]);

  return (
    <>
      <PageHeading text="Book Details" />

      {book && (
        <div className="bookCard">
          <img src={book.imgUrl} alt={book.title} />
          <h2>{book.title}</h2>
          <p>Author: {book.author.name}</p>
          <p>{book.descr}</p>
        </div>
      )}
    </>
  );
}
