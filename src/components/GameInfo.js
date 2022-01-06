import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import GameLevel from "./GameLevel";
import GamePanel from "./GamePanel";

function GameInfo() {
  const { user } = useUserContext();

  return (
    <Wrapper>
      <header className="header">
        <h1>{user.name} 님 </h1>
        <img src={user.photo} alt={user.name} />
      </header>

      <GamePanel />
      <GameLevel />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding: 1rem;
  background-color: #432874;
  color: #fff;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      font-size:1.5rem;
      font-weight:bold;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1240px) {
    width: 500px;
    height: 300px;
  }
`;

export default GameInfo;
