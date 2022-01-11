import React from 'react';
import styled from 'styled-components';
import {GameControl, GameMain} from '../components';

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
  margin: 2rem 0;
  gap: 2rem;
  @media screen and (max-width: 1330px) {
    flex-direction: column;
    gap: 0;
    margin: 2rem;
  }
`;

export default Game;
