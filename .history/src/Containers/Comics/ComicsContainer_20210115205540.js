/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
// @ts-nocheck
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { connect } from 'react-redux';
// import {
//   CSSTransition, TransitionGroup,
// } from 'react-transition-group';
import { MainLayout, ComicsList } from 'Components';
import {
  receiveComicsAction,
  isComicsLoadingAction,
  receiveRenderedComicsAction,
  addComicAction,
  deleteComicAction,
  comicsLoadingFailedAction,
} from './ComicsActions';

import './ComicsContainer.scss';

class ComicsContainer extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(isComicsLoadingAction(true));
    const options = {
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character?count=50',
    };

    axios.request(options).then((response) => {
      const data = response.data.results;

      dispatch(receiveRenderedComicsAction([data.shift()]));
      dispatch(receiveComicsAction(data));
      dispatch(isComicsLoadingAction(false));
    }).catch((error) => {
      dispatch(comicsLoadingFailedAction(error.message));
      dispatch(isComicsLoadingAction(false));
      console.error(error);
    });
  }

  onDelete = (index) => () => {
    const { dispatch } = this.props;
    dispatch(deleteComicAction(index));
  }

  addCharacter = () => {
    const { dispatch, comics } = this.props;
    dispatch(addComicAction(comics[0]));
  }

  render() {
    const { renderedComics, isComicsLoading, comicsError } = this.props;

    return (
      <MainLayout
        content={(
          <div className="comics-container">
            {comicsError.isFailed && (
              <p>
                Whoops, something went wrong:
                {' '}
                {comicsError.message}
              </p>
            )}
            {isComicsLoading && <p>Loading...</p>}
            {!isComicsLoading && !comicsError.isFailed
              && <ComicsList list={renderedComics} onDelete={this.onDelete} />}
          </div>
        )}
        leftSidebar={(
          <Button variant="success" onClick={this.addCharacter}>Add character</Button>)}
      />
    );
  }
}

const mapStateToProps = (state) => (
  {
    comics: state.comics,
    isComicsLoading: state.isComicsLoading,
    renderedComics: state.renderedComics,
    comicsError: state.comicsError,
  }
);

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(ComicsContainer);
