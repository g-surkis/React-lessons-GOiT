/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
// @ts-nocheck
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { MainLayout, ComicsList } from 'Components';
import axios from 'axios';

class ComicsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      error: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    const options = {
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character?count=50',
    };

    axios.request(options).then((response) => {
      // throw new Error({ message: 'message' });
      this.setState({ data: [], isLoading: false });
    }).catch((error) => {
      this.setState({ error: error.message, isLoading: false });
      console.error(error);
    });
  }

  render() {
    const { data, error, isLoading } = this.state;
    return (
      <MainLayout
        content={(
          <div>
            {error && (
            <p>
              Whoops, something went wrong:
              {' '}
              {error.message}
            </p>
            )}
            {isLoading && <p>Loading...</p>}
            {!isLoading && !error && <ComicsList list={data} /> }
          </div>
)}
      />
    );
  }
}

export default ComicsContainer;
