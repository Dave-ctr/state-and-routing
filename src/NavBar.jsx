import React from "react";
import { Link } from "react-router-dom";

function NavBar({ setCurrentTab }) {
  function handleClick(tab) {
    setCurrentTab(tab);
  }

  return (
    <>
      <div className="column">
        <div className="row">
          <h3>This uses React useState: </h3>
          <button onClick={() => handleClick("Bird")} className="button">
            Bird
          </button>
          <button onClick={() => handleClick("Fish")} className="button">
            Fish
          </button>
          <button onClick={() => handleClick("Insect")} className="button">
            Insect
          </button>
        </div>
        <div className="row">
        <h3>This uses React Router: </h3>

          <Link to="/bird" className="button">
            Bird
          </Link>
          <Link to="/fish" className="button">
            Fish
          </Link>
          <Link to="/insect" className="button">
            Insect
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
