/* eslint-disable react/prop-types */
/* eslint-disable no-console */
import React from 'react';
import { Restaurant } from 'Components';
import './Restaurants.scss';

function Restaurants({ list = [], selected, onSelect }) {
  if (list.length) {
    console.log('list: ', list[0]);
  }

  return (
    <div>
      {list.map((el) => (
        <Restaurant
          item={el}
          onSelect={onSelect}
          selected={selected}
        />
      ))}
    </div>
  );
}

export default Restaurants;
