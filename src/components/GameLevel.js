import React from "react";
import styled from "styled-components";
import { medalList } from "../utils/helper";

const list = [
  { id: 1, icon: "💰", number: 21, color: "yellow" },
  { id: 2, icon: "❤️", number: 2, color: "red" },
];

function GameLevel() {
  return (
    <Wrapper className="level">
      <h1> {medalList(1)} LEVEL 1 </h1>
      <div className="items">
        {list.map((item) => {
          const { id, icon, number, color } = item;
          return (
            <li key={id}>
              {icon} <span style={{ color: color }}>{number}</span>
            </li>
          );
        })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  display: flex;
  .items {
    display: flex;
    li {
      margin-left: 5px;
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
      }
    }
  }
`;

export default GameLevel;
