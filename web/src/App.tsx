import React, { FC } from 'react';

import 'leaflet/dist/leaflet.css';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';

const App: FC = () => (
  <>
    <GlobalStyles />
    <Routes />
  </>
);

export default App;
