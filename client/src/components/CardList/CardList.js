import React from 'react';
import Card from './Card';

const CardList = ({ drinks }) => {
  return (
    <div>
      {
        drinks.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={drinks[i].id} 
              name={drinks[i].name}  
            />
          );
        })
      }
    </div>
  );
}

export default CardList;