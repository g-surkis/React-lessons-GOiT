/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { Restaurant } from 'Components';
import { restaurantType } from '../../types';
import './Restaurants.scss';

function Restaurants({ list = [], selected, onSelect }) {
  if (list.length) {
    // console.log('list: ', list[0]);
  }

  return (
    <div>
      {list.map((el) => (
        <Restaurant
          item={el}
          onSelect={onSelect}
          selected={selected}
          key={el.restaurant.name}
        />
      ))}
    </div>
  );
}

export default Restaurants;

Restaurants.propTypes = {
  list: PropTypes.arrayOf(restaurantType),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
};
Restaurants.defaultProps = {
  list: [],
  selected: [],
};
