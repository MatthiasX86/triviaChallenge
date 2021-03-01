import React, {FunctionComponent} from 'react';
import {Provider} from 'react-redux';
import { store } from './store';

export const State: FunctionComponent = ({ children }) => (
  <Provider store={store} >
    {children}
  </Provider>
)
