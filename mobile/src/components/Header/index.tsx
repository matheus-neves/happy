import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { Container, Title } from './styles';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showCancel = true }) => {
  const navigation = useNavigation();

  const handleGoBackToAppHomepage = (): void => {
    navigation.navigate('OrphanagesMap');
  };

  return (
    <Container>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15bcd6" />
      </BorderlessButton>
      <Title>{title}</Title>

      {showCancel ? (
        <BorderlessButton onPress={handleGoBackToAppHomepage}>
          <Feather name="x" size={24} color="#ff669d" />
        </BorderlessButton>
      ) : (
        <View />
      )}
    </Container>
  );
};

export default Header;
