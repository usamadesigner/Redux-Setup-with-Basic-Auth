import * as React from 'react';
import {Provider} from 'react-redux';
import Route from './navigation/Route';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
   <Route/>
    </Provider>
  
  );
};


export default App;