import React from "react";
import styled from "styled-components/native";


const InputArea = styled.View`
  width: 100%;
  height: 60%;
  background-color: #ffff;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
  box-shadow: 5px 5px 5px rgba(77, 35, 0, 0.2);


`;

export default ({IconSvg}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#000"/>
    </InputArea>
  );

}