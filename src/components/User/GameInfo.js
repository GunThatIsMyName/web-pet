import React from 'react';
import styled from 'styled-components';
import {GameLevel, GamePanel} from '..';
import {useUserContext} from '../../context/UserContext';

function GameInfo() {
  const {user} = useUserContext();

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
  padding: 1rem 2rem;
  background-color: var(--color-yellow);
  color: black;
  border-radius: 10px;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  @media screen and (max-width: 1240px) {
    width: 500px;
    height: 300px;
  }
  @media screen and (max-width: 768px) {
    width:100%;
  }
`;

export default GameInfo;
