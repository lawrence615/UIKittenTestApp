import React from 'react';
import { Provider } from 'react-redux'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import Main from './src/Main'
import { default as theme } from './custom-theme.json'; // <-- Import app theme

import { store } from './src/application/store'


export default () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <Provider store={store}>
        <Main />
      </Provider>
    </ApplicationProvider>
  </React.Fragment>
);