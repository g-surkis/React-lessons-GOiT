import React from 'react';
import { CustomBlock, MainLayout } from 'Components';
import ColorContext from '../../Contexts/ColorContext';

const Product = () => (

  <MainLayout
    content={(
      <ColorContext.Provider value={{ theme: 'white' }}>
        <CustomBlock />
      </ColorContext.Provider>
    )}
  />

);

export default Product;
