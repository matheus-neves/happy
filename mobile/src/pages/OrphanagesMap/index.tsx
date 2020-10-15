import React, { FC } from 'react';
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

const OrphanagesMap: FC = () => {
  const navigation = useNavigation();

  const handleNavigateToOrphanageDetails = (): void => {
    navigation.navigate('OrphanageDetails');
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
          latitude: -31.472133,
          longitude: -52.5959161,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude: -31.472133,
            longitude: -52.5959161,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
            <CalloutView>
              <CalloutText>Lar das meninas</CalloutText>
            </CalloutView>
          </Callout>
        </Marker>
      </MapView>
      <Footer>
        <FooterText>2 orfanatos encontrados</FooterText>

        <CreateOrphanageButton onPress={() => {}}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </View>
  );
};

export default OrphanagesMap;
