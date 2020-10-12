import React from 'react';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import { Container } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';

const OrphanagesMap: React.FC = () => (
  <Container>
    <aside>
      <header>
        <img src={mapMarkerImg} alt="Happy" />
        <h2>Escolha um orfanato no mapa</h2>
        <p>Muitas crianças estão esperando a sua visita :)</p>
      </header>

      <footer>
        <strong>Pelotas</strong>
        <span>Rio Grande do Sul</span>
      </footer>
    </aside>

    <Map
      center={[-31.5613444, -52.4510237]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />
    </Map>

    <Link to="/">
      <FiPlus size={32} color="#fff" />
    </Link>
  </Container>
);

export default OrphanagesMap;
