import React from 'react';

function Nav() {
  return (
    <>
      <nav>
        <div className="back">
          <i className="fa-solid fa-chevron-left" />
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
