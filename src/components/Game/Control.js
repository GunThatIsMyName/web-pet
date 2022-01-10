import React from "react";
import styled from "styled-components";
import { BsPlus } from "react-icons/bs";
import { useUserContext } from "../../context/UserContext";

function Control() {

  const {handleStat}=useUserContext();
  const list = [
    { id: 1, name: "맛 있는 밥 먹기", type: "health", point: 30 },
    { id: 2, name: "운동해서 살빼기", type: "health", point: 40 },
    { id: 3, name: "일 해서 돈 벌기", type: "happy", point: 20 },
    { id: 4, name: "숨쉬며 명상하기", type: "happy", point: 60 },
  ];

  const handleClick = (e) => {
    const {type,point}=e.target.dataset;
    handleStat(type,point)
  };

  return (
    <Wrapper>
      {list.map((item) => {
        const { id, name, type, point } = item;
        return (
          <div className="control__item" key={id}>
            <h1>{name}</h1>
            <BsPlus
              className="control__item__btn"
              data-type={type}
              data-point={point}
              onClick={handleClick}
            />
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
    border-bottom: 1px solid var(--color-ligrey);
    .control__item__btn {
      display: flex;
      font-size: 2.5rem;
      font-weight: bold;
      padding: 7px;
      background: var(--color-darkmain);
      color: var(--color-white);
      border-radius: 50%;
      cursor: pointer;
      &:active {
        transform: scale(0.91);
      }
    }
  }
`;
export default Control;
