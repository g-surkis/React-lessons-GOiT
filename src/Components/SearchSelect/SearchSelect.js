// @ts-nocheck
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchSelect extends Component {
  static defaultProps = {
    options: [],
  };

  state = { results: this.props.options };

  search = (evt) => {
    this.setState({
      results: this.props.filterMethod(this.props.options, evt.target.value),
    });
  };

  render() {
    return this.props.children({
      results: this.state.results,
      search: this.search,
    });
  }
}

SearchSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  filterMethod: PropTypes.func.isRequired,
  children: PropTypes.func.isRequired,
};
SearchSelect.defaultProps = {
  options: [],
};
