import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

export default function MainRoutes() {
  return (
    <Switch>
      {/* <Link exact path="/"  component={Home}  />
      <Link path="*" component={<h1>Not Found</h1>} /> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="*">
        <h1>Not Found</h1>
      </Route>
    </Switch>
  );
}
