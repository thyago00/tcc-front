import React from "react";
import { Text } from "react-native";
import { 
    Container, 
    InputArea, 
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
 } from "./styles";

import PetShop from "../../assets/download.png";

export default () => {
  return  (
    <Container>
      {/* <PetShop /> */}
      <InputArea>
        {/* <SingInput/>
        <SingInput/> */}

        <CustomButton>
            <CustomButtonText>ENTRAR</CustomButtonText>
        </CustomButton>
      </InputArea>
      <SignMessageButton>
          <SignMessageButtonText> Ainda não possui uma conta? </SignMessageButtonText>
          <SignMessageButtonTextBold> Cadastre-se </SignMessageButtonTextBold>
      </SignMessageButton>

    </Container>
  );
};
