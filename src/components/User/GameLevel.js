import React from 'react';
import styled from 'styled-components';
import {useUserContext} from '../../context/UserContext';
import {medalList} from '../../utils/helper';

function GameLevel() {
  const {loadUser} = useUserContext();

  if (!loadUser) {
    return null;
  }

  const {
    userInfo: {level, money},
  } = loadUser;

  return (
    <Wrapper>
      <h1>
        <span>{medalList(level)}</span> Level {level}{' '}
      </h1>
      <div className="items">
        <li>
          <span className="items__money">💰</span>{' '}
          <span style={{color: 'yellow'}}>{money}</span>
        </li>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
  margin-top: -2rem;
  h1 {
    font-size: 1.3rem;
    span {
      font-size: 2.7rem;
    }
  }
  .items {
    display: flex;
    li {
      margin-left: 5px;
      display: flex;
      align-items: center;

      .items__money {
        font-size: 2.7rem;
      }
      span {
        margin-left: 10px;
        font-size: 1.5rem;
      }
    }
  }
`;

export default GameLevel;
