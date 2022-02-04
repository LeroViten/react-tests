import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.scss';

export default function Cards() {
  return (
    <>
      <Link to="/">GO HOME</Link>
      <div className="wrapper">
        <div className="cardContainer">
          <div className="card" style={{ '--i': -1 }}>
            <div className="content" style={{ '--j': 1 }}>
              <h2>Card 01</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, temporibus et
                doloribus, impedit laboriosam sed obcaecati totam in ipsum vel delectus, quidem
                dignissimos expedita exercitationem.
              </p>
            </div>
          </div>
          <div className="card" style={{ '--i': 0 }}>
            <div className="content" style={{ '--j': 2 }}>
              <h2>Card 02</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, temporibus et
                doloribus, impedit laboriosam sed obcaecati totam in ipsum vel delectus, quidem
                dignissimos expedita exercitationem.
              </p>
            </div>
          </div>
          <div className="card" style={{ '--i': 1 }}>
            <div className="content" style={{ '--j': 3 }}>
              <h2>Card 03</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, temporibus et
                doloribus, impedit laboriosam sed obcaecati totam in ipsum vel delectus, quidem
                dignissimos expedita exercitationem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
