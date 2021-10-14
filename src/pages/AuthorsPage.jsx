import { useState, useEffect, lazy, Suspense } from 'react';
import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../styles/AuthorsPage/AuthorsPage.scss';
import * as bookAPI from '../services/booksApi';
import PageHeading from '../components/PageHeading/PageHeading';
// import AuthorSubPage from './AuthorSubPage';

const AuthorSubPage = lazy(() =>
  import('./AuthorSubPage' /* webpackChunkName: "author-subpage" */),
);

export default function AuthorsPage() {
  const { url, path } = useRouteMatch();
  const [authors, setAuthors] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    setTimeout(() => {
      bookAPI.fetchAuthors().then(setAuthors);
      setStatus('resolved');
    }, 1000);
  }, []);

  return (
    <>
      <PageHeading text="Authors" />
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

      {authors && (
        <ul className="authorGallery">
          {authors.map(author => (
            <li key={author.id} className="authorGalleryItem">
              <NavLink to={`${url}/${author.id}`}>
                <img src={author.poster} alt={author.name} className="authorGalleryItem__image" />
                <p className="authorGalleryItem__title">{author.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
      <br />
      <hr />

      <Suspense fallback={<Loader className="Loader" type="Rings" color="#b00b69" />}>
        <Route path={`${path}/:authorId`}>{authors && <AuthorSubPage authors={authors} />}</Route>
      </Suspense>
    </>
  );
}
