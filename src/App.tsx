import React from 'react';
import Navigation from './navigation';
import {Provider} from 'react-redux';
import {store} from './store/store';

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;

// add errors message
