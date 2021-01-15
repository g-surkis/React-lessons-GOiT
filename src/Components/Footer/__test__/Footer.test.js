import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
  it('Make snapshot of Footer', () => {
    const { asFragment } = render(
      <Footer />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
