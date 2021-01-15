import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { restaurantType } from '../../types';
import './RestaurantCategories.scss';

function RestaurantCategories({ list = [], onCategoryChoose, active }) {
  const chose = (category) => () => {
    onCategoryChoose(category);
  };
  return (
    <div className="restorant-categories">
      {list.map((el) => {
        const itemStyles = classNames('restorant-categories__item',
          {
            'active-item-class': active === el.categories.name,
          });
        return (
          <div
            key={el.categories.name}
            className={itemStyles}
            onClick={chose(el)}
            role="button"
            tabIndex={0}
          >
            {el.categories.name}
          </div>
        );
      })}
    </div>
  );
}

export default RestaurantCategories;

RestaurantCategories.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ el: restaurantType })),
  onCategoryChoose: PropTypes.func.isRequired,
  active: PropTypes.string,
};
RestaurantCategories.defaultProps = {
  list: [],
  active: '',
};
