import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ShepeOne = styled.View`
  background-color: #F24150;
  border-bottom-left-radius: 80;
  border-bottom-right-radius: 80;
  width: 100%; 
  height: 30%;

`;
export const ShepeTwo = styled.View`
  background-color: #3BD98F;
  border-bottom-left-radius: 80;
  border-bottom-right-radius: 80;
  width: 100%; 
  height: 30%;

`;
export const SignMessageHeaderText = styled.Text``;


export const InputArea = styled.View`
  width: 100%;
  padding: 40px;
`;

export const CustomButton = styled.TouchableOpacity`

  height: 60px;
  background-color: #FF3F52;
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(77, 35, 0, 0.2);
  justify-content: center;
  align-items: center;
`;
export const CustomButtonText = styled.Text`
  font-size: 18px;
  color: #000;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText= styled.Text`
  font-size: 16px;
  color: #000;
  
`;
export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: bold;
  margin-left: 5px;
`;