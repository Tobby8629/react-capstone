import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <div className="back">
          <Link to="/">
            <i className="fa-solid fa-chevron-left" />
            {' '}
          </Link>
          <h4>2022</h4>
        </div>
        <h2>revenues</h2>
        <div className="icons">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </nav>
    </>

  );
}

export default Nav;
