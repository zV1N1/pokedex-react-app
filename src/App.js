import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';

import Routes from './routes';

import { PokeContextProvider } from './contexts/PokeContext';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <PokeContextProvider>
        <Header />
        <Routes />
        <GlobalStyle />
      </PokeContextProvider>
    </Router>
  );
}

export default App;
