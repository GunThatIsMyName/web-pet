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
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media screen and (max-width: 1240px) {
    display:grid;
    gap:0;
    align-items:flex-end;
  }
`;

export default Game;
