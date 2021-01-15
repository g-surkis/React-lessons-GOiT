/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/static-property-placement */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/css';

import { Input, TagList, SearchSelect } from 'Components';

const styles = {
  container: css`
    width: 20rem;
  `,
};

export default class TagListSearch extends Component {
  static defaultProps = {
    options: [],
  };

  filterMethod = (options, query) => options.filter(
    (option) => option.toLowerCase().includes(query.toLowerCase()),
  );

  render() {
    return (
      <SearchSelect
        options={this.props.options}
        filterMethod={this.filterMethod}
      >
        {({ results, search }) => (
          <div className={styles.container}>
            <Input placeholder="Type to search" onChange={search} />
            <TagList items={results} />
          </div>
        )}
      </SearchSelect>
    );
  }
}

TagListSearch.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};
TagListSearch.defaultProps = {
  options: [],
};
