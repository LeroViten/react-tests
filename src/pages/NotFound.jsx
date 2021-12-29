import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <h1>
      The page you're looking for isn't found. Go to <Link to="/">HomePage</Link>
    </h1>
  );
}
