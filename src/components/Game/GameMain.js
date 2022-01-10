import React from "react";
import styled from "styled-components";
import { GameInfo, GamePet } from "..";
import { useUserContext } from "../../context/UserContext";

function GameMain() {

  const { loadUser } = useUserContext();

  if (!loadUser) {
    return null;
  }

  const clothesList = Object.keys(loadUser.userClothes);
  const realList = loadUser.userClothes;

  return (
    <Wrapper>
      <GameInfo  />
      <GamePet ObjList={clothesList} dataList={realList} />
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
