import React from "react";
import styled from "styled-components/native";
import LocationIcon from "../assets/my_location.svg";
import FavoritIcon from "../assets/favorite.svg";
import HomeIcon from "../assets/home.svg";

const TabArea = styled.View`
  height: 60px;
  width: 330px;
  background-color: #ff3f52;
  flex-direction: row;
  border-radius: 30px;
  align-self: center;
  align-items: center;
  margin-bottom: 15px;
`;
const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ShapeItem = styled.TouchableOpacity`
  background-color: #fff;
  height: 44px;
  width: 105px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

export default ({ state, navigation }) => {
  const goTo = (screenName) => {
      navigation.navigate(screenName);
  }
  return (
    <TabArea>
      <ShapeItem onPress={()=>goTo('Location')}>
          <LocationIcon style={{opacity: state.index===0? 1 : 0.5}} height="24" width="24" fill="#000" />
      </ShapeItem>
      <TabItem onPress={()=>goTo('Favorites')}>
        <FavoritIcon style={{opacity: state.index===1? 1 : 0.5}} height="24" width="24" fill="#B22730" />
      </TabItem>
      <TabItem onPress={()=>goTo('Home')}>
        <HomeIcon style={{opacity: state.index===2? 1 : 0.5}} height="24" width="24" fill="#B22730" />
      </TabItem>
    </TabArea>
  );
};
