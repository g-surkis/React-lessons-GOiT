/* eslint-disable react/no-did-update-set-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { CustomBlock } from 'Components';
import PropTypes from 'prop-types';

import './Sidebar.scss';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor: ');
    this.state = {
      name: 'Robert',
      age: 42,
      data: {
        address: 'Ternopil, Ruska str',
      },
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps: ');
    if (nextProps.age > prevState.age) {
      const { name, age } = nextProps;
      return {
        name,
        age,
        // data: null,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount: ');

    window.addEventListener('resize', this.resizeHandler);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('nextProps: shouldComponentUpdate', nextProps);

  //   if (nextProps.city === 'Kyiv') {
  //     return true;
  //   }

  //   return true;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   return 'AAFF';
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('componentDidUpdate: ');
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount: ');

    window.removeEventListener('resize', this.resizeHandler);
  }

  resizeHandler = (event) => {
    console.log(window.innerWidth);
  }

  delete =() => {
    console.log(this);
    console.log('delete smth');
  }

  render() {
    console.log('render: ');
    const { optionalArrayOf, city } = this.props;
    const { name, age, data } = this.state;

    const raw = `His name is ${name}, and hi is ${age} years old`;

    return (
      <div className="sidebar">
        Sidebar

        <div id="name">{name}</div>
        <div>{age}</div>
        <div>{city}</div>
        <div>{raw}</div>
        <div>{data.address}</div>

      </div>
    );
  }
}

Sidebar.propTypes = {
  optionalArrayOf: PropTypes.arrayOf(
    PropTypes.shape({
      optionalProperty: PropTypes.string,
      requiredProperty: PropTypes.number,
    }),
  ),
  name: PropTypes.string,
  city: PropTypes.string,
  age: PropTypes.number,
};

Sidebar.defaultProps = {
  optionalArrayOf: [],
  name: '',
  age: 0,
  city: '',
};

export default Sidebar;

// { /* {optionalArrayOf.length ? optionalArrayOf.map((el) => (
//           <div key={el.optionalProperty}>
//             {el.name}
//           </div>
//         )) : null} */ }
