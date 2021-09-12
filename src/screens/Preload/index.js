import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { Container } from './styles';
// import {ReactComponent as PetLogo} from '../../assets/barber.svg'
import PetLogo from '../../assets/barber.svg'
export default () => {
  return (
    <Container>
      <Image style={styles.img} source={PetLogo}></Image>
    </Container>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});