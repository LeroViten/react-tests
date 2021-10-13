import { Route, Switch } from 'react-router-dom';
import Container from '../Container/Container';
import AppBar from '../AppBar/AppBar';
import HomePage from '../../pages/HomePage';
import AuthorsPage from '../../pages/AuthorsPage';
import BooksPage from '../../pages/BooksPage';
import BookDetailsPage from '../../pages/BookDetailsPage';
import NotFoundPage from '../../pages/NotFoundPage';

export default function App() {
  return (
    <>
      <Container>
        <AppBar />
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
      </Container>
    </>
  );
}
