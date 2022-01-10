import React from 'react';
import styled from 'styled-components';
import {BsPlus} from 'react-icons/bs';
import {useUserContext} from '../../context/UserContext';
import {ControlList} from '../../utils/helper';

function Control() {
  const {handleStat} = useUserContext();

  const handleClick = (e) => {
    const {type, point} = e.target.dataset;
    handleStat(type, point);
  };

  return (
    <Wrapper>
      {ControlList.map((item) => {
        const {id, name, type, point} = item;
        return (
          <div className="control__item" key={id}>
            <h1>{name}</h1>
            <button className="control__item__btn">
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
