/* eslint-disable import/prefer-default-export */
import {
  RECEIVE_COMICS, REQUEST_COMICS, RECEIVED_RENDERED_COMICS, ADD_COMIC,
  DELETE_COMIC, RECEIVE_COMICS_FAILED,
} from './ComicsTypes';

const receiveComicsAction = (payload) => ({
  type: RECEIVE_COMICS,
  payload,
});

const receiveRenderedComicsAction = (payload) => ({
  type: RECEIVED_RENDERED_COMICS,
  payload,
});

const isComicsLoadingAction = (payload) => ({
  type: REQUEST_COMICS,
  payload,
});

const addComicAction = (payload) => ({
  type: ADD_COMIC,
  payload,
});

const deleteComicAction = (payload) => ({
  type: DELETE_COMIC,
  payload,
});

const comicsLoadingFailedAction = (payload) => ({
  type: RECEIVE_COMICS_FAILED,
  payload,
});

export {
  receiveComicsAction, isComicsLoadingAction, receiveRenderedComicsAction, addComicAction,
  deleteComicAction, comicsLoadingFailedAction,
};
