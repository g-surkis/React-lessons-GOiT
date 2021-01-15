/* eslint-disable no-console */
import { combineReducers } from 'redux';

import {
  comics, isComicsLoading, renderedComics, comicsError,
} from './Comics/ComicsReducers';

const combinedReducer = combineReducers({
  comics,
  isComicsLoading,
  renderedComics,
  comicsError,
});

export default combinedReducer;
