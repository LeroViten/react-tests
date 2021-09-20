import PropTypes from 'prop-types';
import defaultPoster from './default.jpg';

const Movie = ({ posterUrl = defaultPoster, title, release, overview, avarageVote }) => {
  return (
    <div>
      <img src={posterUrl ?? defaultPoster} alt={title} width="320" />
      <h3>{title}</h3>
      <p>Release date: {release}</p>
      <p>Avarage Vote: {avarageVote < 7 ? 'Low Rating' : avarageVote}</p>
      <p>Quick overview:</p>
      <p>{overview}</p>
      <button type="button">Add to library</button>
    </div>
  );
};

Movie.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  release: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  avarageVote: PropTypes.number.isRequired,
};

export default Movie;
