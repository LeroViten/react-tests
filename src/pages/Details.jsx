import { useSelector } from 'react-redux';
import { selectPeopleDetails } from '../redux/reducers/peopleDetails/selectors';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Details() {
  const details = useSelector(selectPeopleDetails);

  if (details.loading) {
    return <Loader className="Loader" type="Puff" color="#6667ab" height={200} width={200} />;
  }

  const { name, birth_year, skin_color, mass, gender } = details.data;

  return (
    <div>
      <h1>{name}</h1>
      <h4>Birth Year: {birth_year}</h4>
      <p>Skin: {skin_color}</p>
      <p>Mass: {mass}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}
