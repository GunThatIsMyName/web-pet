import React from "react";
import styled from "styled-components";
import GameInfo from "../GameInfo";
import GamePet from "../GamePet";

function GameMain() {
  return (
    <Wrapper>
      <GameInfo />
      <GamePet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (max-width: 1240px) {
    display: flex;
    justify-content:center;
    width:100%;
  }
`;

export default GameMain;
