import React from "react";
import styled from "styled-components";
import GamePanel from "./GamePanel";

function GameInfo() {
  return (
    <Wrapper>

      <header className="header">
        <h1>Nickname</h1>
        <ul>
          <li>Home</li>
          <li>about</li>
        </ul>
      </header>

      <GamePanel />


      <div className="level">
        <h1>LEVEL 13</h1>
        <div className="items">
          <h1>money</h1>
          <h1>time</h1>
          <h1>happy</h1>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  padding:1rem;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .level {
    display: flex;
    justify-content: space-between;
    width: 100%;
    display: flex;
  }
`;

export default GameInfo;
