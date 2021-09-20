import React, { useState } from "react";
import { Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { UserContext } from "../../contexts/UserContext";
import {
  Container,
  ShepeOne,
  ShepeTwo,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignMessageHeaderText,
} from "./styles";
import Api from "../../Api";
import SignInput from "../../components/SignInput";
import LoginLogo from "../../assets/Login.svg";
import Personicon from "../../assets/person.svg";
import EmailIcon from "../../assets/email.svg";
import LockIcon from "../../assets/lock.svg";

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const navigation = useNavigation();

  const [emailField, setEmailField] = useState("");
  const [nameField, setNameField] = useState("");
  const [passwordField, setpasswordField] = useState("");

  const handleSignClick = async () => {
    if (nameField != "" && emailField != "" && passwordField != "") {
      let res = await Api.signUp(nameField, emailField, passwordField);

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
        alert("Erro: " + res.error);
      }
    } else {
      alert("Preencha os campos");
    }
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{ name: "SignIn" }],
    });
  };

  return (
    <Container>
      {/*<ShepeOne>
        <ShepeTwo>
          
        </ShepeTwo>
      </ShepeOne>*/}
      <Image style={styles.img} source={LoginLogo}></Image>
      <SignMessageHeaderText>Bem vindo ao ShopFinder.</SignMessageHeaderText>

      <InputArea>
        <SignInput
          /*IconSvg={PersonIcon}*/
          placeholder="Digite seu nome"
          value={nameField}
          onChangeText={(t) => setNameField(t)}
        />
        <SignInput
          /*IconSvg={EmailIcon}*/
          placeholder="Digite seu e-mail"
          value={emailField}
          onChangeText={(t) => setEmailField(t)}
        />
        <SignInput
          /*IconSvg={LockIcon}*/
          placeholder="Digite sua senha"
          value={passwordField}
          onChangeText={(t) => setpasswordField(t)}
          password={true}
        />
        <CustomButton onPress={handleSignClick}>
          <CustomButtonText>Cadastrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
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
