import styled, { css } from 'styled-components/native';

import { ScrollView, Dimensions, TouchableOpacity } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;

interface ScheduleProps {
  color: 'blue' | 'green' | 'red';
}

export const Container = styled(ScrollView)`
  flex: 1;
`;

export const ImagesContainer = styled.View`
  height: 240px;
`;

export const Img = styled.Image.attrs({
  resizemode: 'cover',
})`
  width: ${screenWidth}px;
  height: 240px;
`;

export const DetailsContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`;

export const Description = styled.Text`
  color: #5c8599;
  font-family: 'Nunito_600SemiBold';
  line-height: 24px;
  margin-top: 16px;
`;

export const MapContainer = styled.View`
  border-radius: 20px;
  overflow: hidden;
  border-width: 1.2px;
  border-color: #b3dae2;
  margin-top: 40px;
  background-color: #e6f7fb;
`;

export const RoutesButton = styled(TouchableOpacity)`
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

export const RoutesText = styled.Text`
  font-family: 'Nunito_700Bold';
  color: #0089a5;
`;

export const Separator = styled.View.attrs({
  marginVertical: 40,
})`
  height: 0.8px;
  width: 100%;
  background-color: #d3e2e6;
`;

export const ScheduleContainer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ScheduleItem = styled.View<ScheduleProps>`
  width: 48%;
  padding: 20px;
  border-radius: 20px;
  border-width: 1px;

  ${props =>
    props.color === 'blue' &&
    css`
      border-color: #b3dae2;
      background-color: #e6f7fb;
    `}

  ${props =>
    props.color === 'green' &&
    css`
      border-color: #a1e9c5;
      background-color: #edfff6;
    `}

    ${props =>
    props.color === 'red' &&
    css`
      border-color: #ffbcd4;
      background-color: #fef6f9;
    `}
`;

export const ScheduleText = styled.Text<ScheduleProps>`
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
  color: ${props => (props.color === 'blue' ? '#5C8599' : '#37C77F')};

  ${props =>
    props.color === 'blue' &&
    css`
      color: #5c8599;
    `}

  ${props =>
    props.color === 'green' &&
    css`
      color: #37c77f;
    `}

    ${props =>
    props.color === 'red' &&
    css`
      color: #ff669d;
    `}
`;

export const ContactButton = styled(RectButton)`
  background-color: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 56px;
  margin-top: 40px;
`;

export const ContactButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  color: #fff;
  font-size: 16px;
  margin-left: 16px;
`;
