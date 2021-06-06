import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';

import Routes from './routes';

import GlobalStyle from './styles/GlobalStyles';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
