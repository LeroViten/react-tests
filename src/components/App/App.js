import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
// import HomePage from '../../pages/HomePage';
// import AuthorsPage from '../../pages/AuthorsPage';
// import BooksPage from '../../pages/BooksPage';
// import BookDetailsPage from '../../pages/BookDetailsPage';
// import NotFoundPage from '../../pages/NotFoundPage';

const HomePage = lazy(() => import('../../pages/HomePage' /* webpackChunkName: "home-page" */));
const AuthorsPage = lazy(() =>
  import('../../pages/AuthorsPage' /* webpackChunkName: "authors-page" */),
);
const BooksPage = lazy(() => import('../../pages/BooksPage' /* webpackChunkName: "books-page" */));
const BookDetailsPage = lazy(() =>
  import('../../pages/BookDetailsPage' /* webpackChunkName: "book-details-page" */),
);
const NotFoundPage = lazy(() =>
  import('../../pages/NotFoundPage' /* webpackChunkName: "404-page" */),
);

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
        <Suspense fallback={<Loader className="Loader" type="Rings" color="#b00b69" />}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/authors">
              <AuthorsPage />
            </Route>
            <Route path="/books" exact>
              <BooksPage />
            </Route>
            <Route path="/books/:bookId">
              <BookDetailsPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}
