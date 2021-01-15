import React from 'react';
import { comicType } from '../../types';
import './ComicItem.scss';

function ComicItem({ item }) {
  return (
    <div className="comic-item" key={item.name}>
      <img src={item.image} alt={item.name} />
      {item.name}
    </div>
  );
}

export default ComicItem;

ComicItem.defaultProps = {
  item: {},
};

ComicItem.propTypes = {
  item: comicType,
};
