import React from 'react';

function ComicsList({ list = [] }) {
  return (
    <div>
      {list.map((el) => (
        <div key={el.name}>
          <img src={el.image} alt={el.name} />
          {el.name}
        </div>
      ))}
      {list.length === 0 && <div>No data</div>}
    </div>
  );
}

export default ComicsList;
