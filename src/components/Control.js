import React from "react";
import styled from "styled-components";
import { BsPlus } from "react-icons/bs";

function Control() {
  const list = [
    { id: 1, name: "밥 먹기" },
    { id: 2, name: "운동 하기" },
    { id: 3, name: "일 하기" },
    { id: 4, name: "휴식 하기" },
  ];

  const handleClick = () => {
    console.log("???");
  };

  return (
    <Wrapper>
      {list.map((item) => {
        const { id, name } = item;
        return (
          <div className="control__item" key={id}>
            <h1>{name}</h1>
            <button className="control__item__btn" onClick={handleClick}>
              <BsPlus />
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
    border-bottom: 1px solid var(--color-ligrey);
    .control__item__btn {
      display: flex;
      font-size: 2rem;
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
