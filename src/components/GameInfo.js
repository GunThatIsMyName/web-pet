import React from "react";
import styled from "styled-components";
import { medalList } from "../utils/helper";
import GameLevel from "./GameLevel";
import GamePanel from "./GamePanel";

function GameInfo() {
  return (
    <Wrapper>
      <header className="header">
        <h1>Nickname</h1>
        <img
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt="alt"
        />
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
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
`;

export default GameInfo;
