import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Container } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';

import mapIcon from '../../utils/mapIcon';

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
      center={[-27.2092052, -49.6401092]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
      />

      <Marker icon={mapIcon} position={[-27.2092052, -49.6401092]}>
        <Popup
          closeButton={false}
          minWidth={240}
          max-maxWidth={240}
          className="map-popup"
        >
          Lar das meninas
          <Link to="/orphanages/1">
            <FiArrowRight size={20} color="#fff" />
          </Link>
        </Popup>
      </Marker>
    </Map>

    <Link to="/orphanages/create">
      <FiPlus size={32} color="#fff" />
    </Link>
  </Container>
);

export default OrphanagesMap;
