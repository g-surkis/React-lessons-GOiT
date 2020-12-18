/* eslint-disable react/prefer-stateless-function */
// @ts-nocheck
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-prop-types */

import React, { Component } from 'react';
import styled from 'styled-components';
import './Header.scss';
import PropTypes from 'prop-types';

const Logo = styled.h1`
  font-size: 42px;
  color: palevioletred;
  background-color: darkcyan;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo>Learn React Course</Logo>
        <Button primary>Sign In</Button>
        <TomatoButton>Sign up</TomatoButton>
      </div>
    );
  }
}

Header.defaultProps = {
  text: 'Default text',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
