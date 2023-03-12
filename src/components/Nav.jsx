import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav>
        <div className="back">
          <Link to="/"><i className="fa-solid fa-chevron-left" /> </Link> 
          <h4>2022</h4>
        </div>
        <h2>Whatever</h2>
        <div className="icons">
          <i className="fa-solid fa-microphone" />
          <i className="fa-solid fa-gear" />
        </div>
      </nav>
      <div className="header" />
    </>

  );
}

export default Nav;
