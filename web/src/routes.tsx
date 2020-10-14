import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

const Routes: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/app" component={OrphanagesMap} />

      <Route path="/orphanages/create" component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={Orphanage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
