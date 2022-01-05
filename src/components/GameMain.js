import React from "react";
import styled from "styled-components";
import GameInfo from "./GameInfo";
import GamePet from "./GamePet";

const image =
  "https://cdn.dribbble.com/users/5085092/screenshots/15704565/media/22d3003af8ef76a3f04e46313370b67d.jpg";

function GameMain() {
  return (
    <Wrapper>
      <GameInfo />
      <GamePet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height:100%;

`;

export default GameMain;
