import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import combinedReducer from './Containers/reducers';

const logger = createLogger({
  // ...options
});

// const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

// const store = createStore(combinedReducer, composeEnhancers());
const store = createStore(combinedReducer, applyMiddleware(logger));

export default store;
