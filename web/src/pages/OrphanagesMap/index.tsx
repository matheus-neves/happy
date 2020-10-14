import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlus } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import { Container } from './styles';
import mapMarkerImg from '../../images/map-marker.svg';

import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface IOrphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    (async () => {
      const response = await api.get<IOrphanage[]>('orphanages');

      setOrphanages(response.data);
    })();
  }, []);

  return (
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
        center={[-31.7652805, -52.3395189]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(({ id, name, latitude, longitude }) => (
          <Marker key={id} icon={mapIcon} position={[latitude, longitude]}>
            <Popup
              closeButton={false}
              minWidth={240}
              max-maxWidth={240}
              className="map-popup"
            >
              {name}
              <Link to={`/orphanages/${id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  );
};

export default OrphanagesMap;
