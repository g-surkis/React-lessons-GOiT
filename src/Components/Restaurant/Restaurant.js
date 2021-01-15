/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { restaurantType } from '../../types';
import './Restaurant.scss';

function Restaurant({ item, onSelect, selected }) {
  const { restaurant } = item;
  const selectRestaurant = () => {
    onSelect(restaurant.id);
  };
  const config = { stiffness: 300, damping: 45 };
  const toCSS = (scale) => ({ transform: `scale3d(${scale}, ${scale}, ${scale})` });

  return (
    <div className="restaurant">
      <div><img src={restaurant.thumb} alt={restaurant.thumb} /></div>
      <Motion
        defaultStyle={{ scale: 0 }}
        style={{ scale: spring(1, config) }}
      >
        {(value) => (
          <div
            style={toCSS(value.scale)}
          >
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
        )}
      </Motion>
    </div>
  );
}

export default Restaurant;

Restaurant.propTypes = {
  item: PropTypes.shape({ restaurant: restaurantType }),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.arrayOf(PropTypes.string),
};
Restaurant.defaultProps = {
  item: { restaurant: {} },
  selected: [],
};
