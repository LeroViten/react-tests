import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div>
      <h1>Sorry, that page doesn't exist! 😢</h1>
      <p>
        Go to the
        <Link to="/">
          {' '}
          <b>Main Page</b>
        </Link>
      </p>
    </div>
  );
}
