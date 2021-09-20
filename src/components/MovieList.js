import Movie from './Movie';
import PropTypes from 'prop-types';

function MovieList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Movie
            posterUrl={item.backdrop_path}
            title={item.original_title}
            release={item.release_date}
            overview={item.overview}
            avarageVote={item.vote_average}
          />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default MovieList;
