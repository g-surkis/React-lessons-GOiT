/* eslint-disable react/prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Restaurant.scss';

function Restaurant({ item = {}, onSelect, selected }) {
  const { restaurant } = item;
  const selectRestaurant = () => {
    onSelect(restaurant.id);
  };
  console.log('selected.includes(restaurant.id: ', selected.includes(restaurant.id));
  return (
    <div className="restaurant">
      <div><img src={restaurant.thumb} alt={restaurant.thumb} /></div>

      <div>
        <div className="name">
          {restaurant.name}
        </div>
        {(selected.length < 2 || selected.includes(restaurant.id)) && (

        <input
          type="checkbox"
          onChange={selectRestaurant}
          checked={selected.includes(restaurant.id)}
        />
        )}
      </div>

    </div>
  );
}

export default Restaurant;
