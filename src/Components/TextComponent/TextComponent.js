import React from 'react';
import PropTypes from 'prop-types';

const TextComponent = (props) => {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
};

export default TextComponent;

TextComponent.propTypes = {
  text: PropTypes.string,
};
TextComponent.defaultProps = {
  text: '',
};
