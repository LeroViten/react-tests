import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../components/Form/SignUpForm';

export default function FormPage() {
  return (
    <div>
      <Link to="/" className="navLink">
        GO HOME
      </Link>
      <Link to="/cards" className="navLink">
        GO TO CARDS
      </Link>
      <SignUpForm />
    </div>
  );
}
