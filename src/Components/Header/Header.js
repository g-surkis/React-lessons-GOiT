/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/prefer-stateless-function */
// @ts-nocheck

import React, { Component } from 'react';
import styled from 'styled-components';
import './Header.scss';
import { Autocomplete } from 'Components';
import options from '../../options.json';

const Logo = styled.h1`
  font-size: 42px;
  color: palevioletred;
  background-color: darkcyan;
  height: 120px;
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
  animationRef = null;

  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
    this.myRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.state.animate) {
      this.animate({
        timing: this.circ,
        draw: this.draw,
        duration: 1000,
      });
    }
  }

  onMouseEnterHandler = () => {
    this.setState({ animate: true });
  }

  onMouseLeaveHandler = () => {
    this.setState({ animate: false });
    // console.log('onMouseLeaveHandler: ');
  }

  circ = (timeFraction) => 1 - Math.sin(Math.acos(timeFraction))

  draw = (progress) => {
    this.myRef.current.style.width = `${25 + (progress * 75)}%`;
  }

  animate = ({ timing, draw, duration }) => {
    const start = performance.now();
    let anRef = this.animationRef;

    const stateRef = this.state;

    anRef = requestAnimationFrame(function animate1(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      // вычисление текущего состояния анимации
      const progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
        // console.log('stateRef.animate: ', stateRef.animate);
        if (!stateRef.animate) {
          cancelAnimationFrame(anRef);
        } else {
          anRef = requestAnimationFrame(animate1);
        }

        // console.log('animationRef: ', animationRef);
      }
    });
  }

  render() {
    return (
      <div className="header">
        <Logo
          ref={this.myRef}
          onMouseEnter={this.onMouseEnterHandler}
          onMouseLeave={this.onMouseLeaveHandler}
        >
          Learn React Course
        </Logo>
        <Autocomplete options={options} />
        <Button primary>Sign In</Button>
        <TomatoButton>Sign up</TomatoButton>
      </div>
    );
  }
}

export default Header;
