/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ComicItem, Toggler } from 'Components';
import { Button } from 'react-bootstrap';
import { comicType } from '../../types';
import './ComicsList.scss';
// import withToggle from 'Utils/withToggle';
// const Comic = withToggle(ComicItem);

function ComicsList({ list = [], onDelete }) {
  return (
    <TransitionGroup className="comic-list">
      {list.map((el, i) => (
        // <Comic el={el} key={el.name} />
        <CSSTransition
          key={el.name}
          timeout={1000}
          classNames="list"
          // onEnter={() => console.log('onEnter event')}
          // onEntering={() => console.log('onEntering event')}
          // onEntered={() => console.log('onEntered event')}
          // onExit={() => console.log('onExit event')}
          // onExiting={() => console.log('onExiting event')}
        >
          <Toggler>
            {
            ({ isOpen, onToggle }) => (
              <div className="comic-list-item">
                <Button onClick={onToggle}>{isOpen ? 'Hide' : 'Show'}</Button>
                {isOpen && <ComicItem item={el} />}
                <Button variant="warning" onClick={onDelete(i)}>DELETE</Button>
              </div>
            )
          }
          </Toggler>
        </CSSTransition>
      ))}
      {list.length === 0 && <div>No data</div>}
    </TransitionGroup>
  );
}

export default ComicsList;

ComicsList.defaultProps = {
  list: [],
};

ComicsList.propTypes = {
  list: PropTypes.arrayOf(comicType),
  onDelete: PropTypes.func.isRequired,
};
