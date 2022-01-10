import React from 'react';
import styled from 'styled-components';
import {BsPlus} from 'react-icons/bs';
import {useUserContext} from '../../context/UserContext';

function Control() {
  const {handleStat} = useUserContext();
  const list = [
    {
      id: 1,
      name: '둘이 먹다 하나 죽어도 모를 밥 먹기',
      type: 'health',
      point: 30,
    },
    {
      id: 2,
      name: '헬스하고, 크로스핏하고, 행군 하고, 살빼기',
      type: 'health',
      point: 40,
    },
    {id: 3, name: '영끌할라고 죽어라 일해서 돈 벌기', type: 'happy', point: 20},
    {
      id: 4,
      name: '아아아무것도 안하고, 숨쉬며 명상하기',
      type: 'happy',
      point: 60,
    },
  ];

  const handleClick = (e) => {
    const {type, point} = e.target.dataset;
    handleStat(type, point);
  };

  return (
    <Wrapper>
      {list.map((item) => {
        const {id, name, type, point} = item;
        return (
          <div className="control__item" key={id}>
            <h1>{name}</h1>
            <button className="control__item__btn">
              {' '}
              <BsPlus
                data-type={type}
                data-point={point}
                onClick={handleClick}
              />
            </button>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  color: black;
  .control__item {
    height: 25%;
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    margin: 0 1rem;
    &:not(:last-child) {
      border-bottom: 1px dotted black;
    }
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }
    .control__item__btn {
      display: flex;
      font-size: 2.8rem;
      font-weight: bold;
      padding: 7px;
      background: var(--color-yellow);
      color: white;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        background: var(--color-green);
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
export default Control;
