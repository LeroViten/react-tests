import React from 'react';
import { NavLink } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner';
import useFetch from '../hooks/useFetch';
import NavBar from '../components/NavBar/NavBar';
import AnotherNavBar from '../components/AnotherNavBar/AnotherNavBar';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './MainPage.scss';

export default function MainPage() {
  const { data, loading, error } = useFetch('https://api.quotable.io/random');

  return (
    <div className="app">
      {loading && <BallTriangle height="100" width="100" color="cyan" ariaLabel="loading" />}
      {error && <h1>{error}</h1>}
      <div className="navLinks">
        <NavLink to="/cards" className="navLink">
          GO TO CARDS
        </NavLink>
        <NavLink to="/team" className="navLink">
          GO TO TEAM
        </NavLink>
        <NavLink to="/form" className="navLink">
          GO TO FORM
        </NavLink>
        <br />
        <p>{data}</p>
      </div>
      <div className="btnsWrapper">
        <NavBar />
        <br />
        <AnotherNavBar />
      </div>
    </div>
  );
}
