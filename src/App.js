// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import React, { Component, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import { ErrorBoundary } from 'Components';
// import Loadable from 'react-loadable';
import {
  HomeContainer,
  Product,
  AnimationContainer,
  // ComicsContainer,
  // ContactsContainer,
} from 'Containers';
import asyncComponent from 'Utils/asyncComponent';
import store from './store';

const Loader = () => <> ...Loading </>;

const ComicsContainer = asyncComponent({
  loader: () => import('./Containers/Comics/ComicsContainer' /* webpackChunkName: "aaaa" */),
  loading: Loader,
});

// const ContactsContainer = asyncComponent({
//   loader: () => import('./Containers/Contacts/ContactsContainer' /* webpackChunkName: "bbbb" */),
//   loading: Loader,
// });

// const ContactsContainer = Loadable({
//   loader: () => import('./Containers/Contacts/ContactsContainer' /* webpackChunkName: "bbbb" */),
//   loading: Loader,
// });

const ContactsContainer = lazy(() => import('./Containers/Contacts/ContactsContainer'));

const Contact = () => (
  <Suspense fallback={<div>Loading...@@@@@@@@@@@@@</div>}>
    <ContactsContainer />
  </Suspense>
);

class App extends Component {
  // preload = () => {
  //   ContactsContainer.preload();
  // }

  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <ErrorBoundary>
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route exact path="/comics" component={ComicsContainer} />
              {/* <Route path="/about/:id" component={AboutId} /> */}
              <Route
                path="/contact"
                component={Contact}
              />
              <Route
                path="/product"
                component={Product}
              />
              <Route
                path="/animation"
                component={AnimationContainer}
              />
            </Switch>
            {/* <button onClick={this.preload} type="button">Preload Contacts</button> */}
          </ErrorBoundary>
        </Provider>
      </div>
    );
  }
}

export default App;
