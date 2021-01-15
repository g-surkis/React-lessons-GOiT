// @ts-nocheck
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */

import React from 'react';
import { MainLayout, TagListSearch } from 'Components';
import options from '../../options.json';

function ContactsContainer() {
  return (
    <MainLayout
      content={(
        <div style={{ backgroundColor: 'gray' }}>
          My contacts will be placed here

          <TagListSearch options={options} />
        </div>
      )}
    />

  );
}

export default ContactsContainer;
