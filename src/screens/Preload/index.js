import React, { useEffect } from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { Container , LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import PetLogo from '../../assets/barber.svg';

export default () => {

  const navigation = useNavigation();

  useEffect(()=> {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if(token !== null) {
        
      } else {
        navigation.navigate('SignIn');
      }
    } 
    checkToken();
  }, []);

  return (
    <Container>
      <Image style={styles.img} source={PetLogo}></Image>
      <LoadingIcon size = "large" color = "#ffff"/>
    </Container>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});