import React from 'react';
import styled from 'styled-components';
import {GameInfo, GamePet} from '..';

function GameMain() {
  return (
    <Wrapper>
      <GameInfo />
      <GamePet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media screen and (max-width: 1240px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }
`;

export default GameMain;
