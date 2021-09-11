import React, { useEffect } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

// import PetShop from '../../assets/Preload.png';
 
export default () => { 

    const navigation = useNavigation();
    useEffect(() =>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if(token !== null) {
                // validar token
                
            } else {
                navigation.navigate('SingIn');
            }
        }
        checkToken();
    }, []);
    return (
        <Container>
        {/* <PetShop width = "50%" height="50%" /> */}
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}