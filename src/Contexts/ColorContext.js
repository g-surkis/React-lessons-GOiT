/* eslint-disable import/prefer-default-export */
import React from 'react';

const ColorContext = React.createContext({
  theme: 'red',
});

ColorContext.displayName = 'MyDisplayName';

export default ColorContext;
