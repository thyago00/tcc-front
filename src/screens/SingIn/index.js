import React from "react";
import { Text } from "react-native";
import {
  Container,
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold,
} from "./styles";

// import PetShop from "../../assets/download.png";
import SignInput from "../../components/SignInput";
import EmailIcon from "../../assets/email.svg"
import LockIcon from "../../assets/lock.svg"

export default () => {
  return (
    <Container>
      {/* <PetShop /> */}
      <InputArea>
      
        <SignInput IconSvg ={EmailIcon}/>
        <SignInput IconSvg ={LockIcon}/>

        <CustomButton>
          <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton>
        <SignMessageButtonText>
          {" "}
          Ainda não possui uma conta?{" "}
        </SignMessageButtonText>
        <SignMessageButtonTextBold> Cadastre-se </SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};
