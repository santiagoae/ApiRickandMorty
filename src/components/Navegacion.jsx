import React from "react";

function Navegacion({ onPrevious, onNext, prev, next }) {
  const handlePrevious = () => {    
    onPrevious();
  };
  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="navButtons">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="btn btn-dark" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="btn btn-dark ml-5" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navegacion;
