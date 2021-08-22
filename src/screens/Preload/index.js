import React from 'react';
import { Container, LoadingIcon } from './styles';

import PetShop from '../../assets/download.png';


export default () => {
    return (
        <Container>
            <PetShop width = "50%" height="50%" />
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}