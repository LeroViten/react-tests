import errorImage from './error.png';

export default function WeatherError({ message }) {
  return (
    <div role="alert">
      <p>{message}</p>
      <img src={errorImage} width="640" alt="error" />
    </div>
  );
}
