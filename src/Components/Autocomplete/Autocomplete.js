/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import { css } from '@emotion/css';
import { Dropdown, SearchSelect, Input } from 'Components';
import PropTypes from 'prop-types';

const styles = {
  container: css`
    position: relative;
    width: 20rem;
  `,
};

export default class Autocomplete extends Component {
  static defaultProps = {
    options: [],
  };

  state = {
    dropDownVisible: false,
  };

  showDropdown = () => this.setState({ dropDownVisible: true });

  hideDropdown = () => this.setState({ dropDownVisible: false });

  filterMethod = (options, query) => options.filter(
    (option) => option.toLowerCase().includes(query.toLowerCase()),
  );

  render() {
    const { dropDownVisible } = this.state;

    return (
      <SearchSelect
        options={this.props.options}
        filterMethod={this.filterMethod}
      >
        {({ results, search }) => (
          <div className={styles.container}>
            <Input
              placeholder="Type to search"
              onChange={search}
              onFocus={this.showDropdown}
              onBlur={this.hideDropdown}
            />
            {dropDownVisible && <Dropdown items={results} />}
          </div>
        )}
      </SearchSelect>
    );
  }
}

Autocomplete.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
