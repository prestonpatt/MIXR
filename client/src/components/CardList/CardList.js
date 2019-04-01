import React from 'react';
import Card from '../Card/Card';

const CardList = ({ onInputChange, onButtonSubmit, drinks }) => {
  return (
    <div>
      {
        drinks.map((user, i) => {
          return (
            <Card 
            key={i} 
            id={drinks[i].id} 
            drinkname={onInputChange} 
            liquortype={drinks[i].drinkname}/>
          );
        })
      }
    </div>
  );
}

export default CardList;