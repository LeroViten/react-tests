import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import AnotherNavBar from '../components/AnotherNavBar/AnotherNavBar';
import { NavLink } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="app">
      <NavLink to="/cards" className="navLink">
        GO TO CARDS
      </NavLink>
      <NavLink to="/team" className="navLink">
        GO TO TEAM
      </NavLink>
      <NavBar />
      <AnotherNavBar />
    </div>
  );
}
