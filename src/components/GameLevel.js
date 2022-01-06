import React from "react";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import { medalList } from "../utils/helper";

function GameLevel() {
  const { loadUser } = useUserContext();

  if (!loadUser) {
    return null;
  }

  const {
    userInfo: { level, money },
  } = loadUser;
  return (
    <Wrapper className="level">
      <h1>
        {medalList(level)} LEVEL {level}{" "}
      </h1>
      <div className="items">
        <li>
          💰 <span style={{ color: "yellow" }}>{money}</span>
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
