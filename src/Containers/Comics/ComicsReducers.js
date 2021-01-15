/* eslint-disable no-console */
/* eslint-disable no-case-declarations */
/* eslint-disable import/prefer-default-export */
import {
  RECEIVE_COMICS, REQUEST_COMICS,
  RECEIVED_RENDERED_COMICS, ADD_COMIC,
  DELETE_COMIC, RECEIVE_COMICS_FAILED,
} from './ComicsTypes';

const comics = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_COMICS:
      return action.payload;
    case ADD_COMIC:
      const data = [...state];
      data.shift();
      return data;

    default:
      return state;
  }
};

const isComicsLoading = (state = false, action) => {
  switch (action.type) {
    case REQUEST_COMICS:
      return action.payload;

    default:
      return state;
  }
};

const renderedComics = (state = [], action) => {
  switch (action.type) {
    case RECEIVED_RENDERED_COMICS:
      return action.payload;

    case ADD_COMIC:
      return [action.payload, ...state];

    case DELETE_COMIC:
      const newState = [...state];
      newState.splice(action.payload, 1);
      return newState;

    default:
      return state;
  }
};

const comicsError = (state = { isFailed: false, message: '' }, action) => {
  switch (action.type) {
    case RECEIVE_COMICS_FAILED:
      return { isFailed: true, message: action.payload };

    default:
      return state;
  }
};

export {
  comics, isComicsLoading, renderedComics, comicsError,
};
