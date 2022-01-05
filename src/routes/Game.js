import React from "react";
import styled from "styled-components";
import GameControl from "../components/GameControl";
import GameInfo from "../components/GameInfo";
import GameMain from "../components/GameMain";

function Game() {
  return (
    <Wrapper>
      <div className="game">
        <GameInfo />

        <div className="game__box">
          <GameMain />
          <GameControl />
        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: teal;
  min-height: 90vh;
  display: grid;
  place-items: center;

  .game {
    display: flex;
    flex-direction: column;
    .game__box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

export default Game;
