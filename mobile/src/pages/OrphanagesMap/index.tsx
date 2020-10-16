import React, { FC, useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import mapMarker from '../../images/map-marker.png';

import {
  CalloutView,
  CalloutText,
  Footer,
  FooterText,
  CreateOrphanageButton,
} from './styles';
import api from '../../services/api';

interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const response = await api.get<IOrphanage[]>('orphanages');
      setOrphanages(response.data);
    })();
  }, []);

  const handleNavigateToOrphanageDetails = (id: number): void => {
    navigation.navigate('OrphanageDetails', {
      id,
    });
  };

  const handleNavigateToCreateOrphanage = (): void => {
    navigation.navigate('SelectMapPosition');
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        initialRegion={{
          latitude: -31.7689464,
          longitude: -52.3418587,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        {orphanages.map(({ id, name, latitude, longitude }) => (
          <Marker
            key={id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.8,
            }}
            coordinate={{
              latitude,
              longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(id)}
            >
              <CalloutView>
                <CalloutText>{name}</CalloutText>
              </CalloutView>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <Footer>
        <FooterText>{orphanages.length} orfanatos encontrados</FooterText>

        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </View>
  );
};

export default OrphanagesMap;
