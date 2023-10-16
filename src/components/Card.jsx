//import React from 'react';

const Card = ({ title, paragraph, buttonLabel }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button>{buttonLabel}</button>
      </div>
    );
  };
  export default Card;  