import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Page404 from './pages/Page404';

export default function MainRoutes() {
  return (
    <Switch>
      {/* <Link exact path="/"  component={Home}  />
      <Link path="*" component={<h1>Not Found</h1>} /> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/pokemon/:id">
        <Pokemon />
      </Route>
      <Route exact path="*">
        <Page404 />
      </Route>
    </Switch>
  );
}
