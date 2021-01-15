/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/prefer-default-export */
import PropTypes from 'prop-types';

export const comicType = PropTypes.shape({
  image: PropTypes.string,
  name: PropTypes.string,
});

export const restaurantType = PropTypes.shape(
  { restaurant: PropTypes.object, name: PropTypes.string },
);
