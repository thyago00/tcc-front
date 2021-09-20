import React, { useEffect, useContext } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { Container, LoadingIcon } from "./styles";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";
import Api from "../../Api";
import { UserContext } from "../../contexts/UserContext";
import PetLogo from "../../assets/barber.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        let res = await Api.checkToken(token);
        if (res.token) {
          await AsyncStorage.setItem("token", res.token);
          userDispatch({
            type: "setAvatar",
            payload: {
              avatar: res.data.avatar,
            },
          });

          navigation.reset({
            routes: [{ name: "MainTab" }],
          });
        } else {
          navigation.navigate("SignIn");
        }
      } else {
        navigation.navigate("SignIn");
      }
    };
    checkToken();
  }, []);

  return (
    <Container>
      <Image style={styles.img} source={PetLogo}></Image>
      <LoadingIcon size="large" color="#ffff" />
    </Container>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200,
    resizeMode: "stretch",
  },
});
