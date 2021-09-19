import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
  SignMessageHeaderText,
} from "./styles";
import SignInput from "../../components/SignInput";
import LoginLogo from "../../assets/Login.svg";
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"

export default () => {
  return (
    <Container>
      <Image style={styles.img} source={LoginLogo}></Image>

      <SignMessageHeaderText>Bem vindo ao ShopFinder.</SignMessageHeaderText>

      <InputArea>
        <SignInput IconSvg = {EmailIcon}/>
        <SignInput IconSvg = {LockIcon}/>
        <CustomButton>
          <CustomButtonText>Entrar</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
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
