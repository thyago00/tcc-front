import React from "react";
import styled from "styled-components/native";
import { Image, View, StyleSheet } from 'react-native';
import Svg from 'react-native-svg';
import HomeIcon from "../assets/home.svg";

const TabArea = styled.View`
  height: 56px;
  background-color: #fff;
  flex-direction: row;
`;
const TabItem = styled.TouchableOpacity`
`;


export default () => {
  return (
    <TabArea>
      <TabItem> 
      <HomeIcon height={50} width={30}/>
      </TabItem>
    </TabArea>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,

  },
});