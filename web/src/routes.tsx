import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrphanagesMap from './pages/OrphanagesMap';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/app" component={OrphanagesMap} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
