// import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import movies from './movies.json';
import Section from './components/Section';

export default function App() {
  return (
    <div>
      <Section title="Top movies">
        <MovieList items={movies} />
      </Section>
    </div>
  );
}
