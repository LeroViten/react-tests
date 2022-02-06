import React from 'react';
import { Link } from 'react-router-dom';
import './TeamPage.scss';
import TeamLead from '../img/1.jpg';
import Dev from '../img/2.jpg';
import Designer from '../img/3.jpg';
import Scrum from '../img/4.jpg';

export default function TeamPage() {
  return (
    <>
      <Link to="/" className="navLink">
        GO HOME
      </Link>
      <Link to="/cards" className="navLink">
        GO TO CARDS
      </Link>
      <section>
        <div className="box">
          <h3>The team behind the project:</h3>
          <div className="list">
            <div className="imgBox">
              <img src={TeamLead} alt="team member" />
            </div>
            <div className="boxContent">
              <h2 className="rank">
                <small>#</small>1
              </h2>
              <h4>Darth Vader</h4>
              <p>Team Lead</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              <img src={Designer} alt="team member" />
            </div>
            <div className="boxContent">
              <h2 className="rank">
                <small>#</small>2
              </h2>
              <h4>Noah Debora</h4>
              <p>Designer</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              <img src={Dev} alt="team member" />
            </div>
            <div className="boxContent">
              <h2 className="rank">
                <small>#</small>3
              </h2>
              <h4>Kudos Rapira</h4>
              <p>Developer</p>
            </div>
          </div>
          <div className="list">
            <div className="imgBox">
              <img src={Scrum} alt="team member" />
            </div>
            <div className="boxContent">
              <h2 className="rank">
                <small>#</small>4
              </h2>
              <h4>Ivan Shevchenko</h4>
              <p>Scrum Master</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
