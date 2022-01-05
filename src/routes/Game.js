import React from 'react';
import styled from 'styled-components';
import GameControl from '../components/GameControl';
import GameMain from '../components/GameMain';

function Game() {
  return (
    <Wrapper>
      <GameMain />
      <GameControl />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: teal;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .game {
    .game__box {
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
    gap: 0;
  }
`;

export default Game;
