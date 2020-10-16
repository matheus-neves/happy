import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { Linking, ScrollView, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import mapMarkerImg from '../../images/map-marker.png';

import {
  Container,
  ContactButton,
  ContactButtonText,
  DetailsContainer,
  ImagesContainer,
  Description,
  Img,
  MapContainer,
  RoutesButton,
  RoutesText,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText,
  Separator,
  Title,
} from './styles';
import api from '../../services/api';

interface IOrphanageDetailsRouteParams {
  id: number;
}
interface IOrphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

const OrphanageDetails: React.FC = () => {
  const [orphanage, setOrphanage] = useState<IOrphanage>();

  const route = useRoute();
  const { id } = route.params as IOrphanageDetailsRouteParams;

  const handleOpenGoogleMapRoutes = (): void => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`,
    );
  };

  useEffect(() => {
    (async () => {
      const response = await api.get<IOrphanage>(`orphanages/${id}`);
      setOrphanage(response.data);
    })();
  }, [id]);

  if (!orphanage) {
    return (
      <Container>
        <Text>Carregando...</Text>
      </Container>
    );
  }

  return (
    <Container>
      <ImagesContainer>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        >
          {orphanage.images.map(({ id: imageID, url }) => (
            <Img
              key={imageID}
              source={{
                uri: url,
              }}
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <MapView
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={{
              width: '100%',
              height: 150,
            }}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude,
              }}
            />
          </MapView>
          <RoutesButton onPress={handleOpenGoogleMapRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesButton>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem color="blue">
            <Feather name="clock" size={40} color="#2AB5D1" />
            <ScheduleText color="blue">
              Segunda à Sexta {orphanage.opening_hours}
            </ScheduleText>
          </ScheduleItem>

          {orphanage.open_on_weekends ? (
            <ScheduleItem color="green">
              <Feather name="info" size={40} color="#39CC83" />
              <ScheduleText color="green">Atendemos fim de semana</ScheduleText>
            </ScheduleItem>
          ) : (
            <ScheduleItem color="red">
              <Feather name="info" size={40} color="#FF669D" />
              <ScheduleText color="red">
                Não atendemos fim de semana
              </ScheduleText>
            </ScheduleItem>
          )}
        </ScheduleContainer>
        {/*
        <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton> */}
      </DetailsContainer>
    </Container>
  );
};

export default OrphanageDetails;
