import React from 'react';
import './Card.css';

const Card = ({ liquortype, drinkname, id }) => {
  return (
    <div className='card tc dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='cocktail' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2 className='fw2 dib'>{drinkname}</h2>
        <p className='fw2'>{liquortype}</p>
      </div>
    </div>
  );
}

export default Card;