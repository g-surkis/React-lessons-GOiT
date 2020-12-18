/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import './RestorantCategories.scss';

function RestorantCategories({ list = [], onCategoryChoose, active }) {
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

export default RestorantCategories;
