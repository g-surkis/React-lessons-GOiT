/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { ErrorBoundary } from 'Components';
import { HomeContainer, ComicsContainer } from 'Containers';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ErrorBoundary>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route exact path="/comics" component={ComicsContainer} />
            {/* <Route path="/about/:id" component={AboutId} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
