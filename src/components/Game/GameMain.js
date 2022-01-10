
import React from "react";
import { useUserContext } from "../../context/UserContext";
import styled from "styled-components";
import { GameInfo, GamePet } from "..";

function GameMain() {
  const { loadUser } = useUserContext();


  if (!loadUser) {
    return null;
  }

  const clothesList = Object.keys(loadUser.userClothes);
  const realList = loadUser.userClothes;

  return (
    <Wrapper>
      <GameInfo />
      <GamePet ObjList={clothesList} dataList={realList} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
gap:2rem;
@media screen and (max-width: 1330px) {
    margin-bottom:2rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
`;

export default GameMain;
