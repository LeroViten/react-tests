import { ImSpinner } from 'react-icons/im';
import './WeatherLoader.scss';
import searchImage from './search.png';

export default function WeatherLoader({ cityName }) {
  return (
    <div role="alert">
      <div>
        <ImSpinner size="24" className="icon-spin" />
        <span> Loading...</span>
      </div>
      <img src={searchImage} alt="Search" width="120" />
    </div>
  );
}
