import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { ControlList } from "..";

function GameControl() {
  return (
    <Wrapper>
      <div className="game__control">
        <Outlet />
      </div>
      <ControlList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 2rem;
  border-radius: 10px;
  box-shadow: 0px 1px 9px -1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 1px 9px -1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 1px 9px -1px rgba(0, 0, 0, 0.75);
  .game__control {
    width: 800px;
    height: 600px;
    overflow-y: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media screen and (max-width: 1240px) {
    width: 90%;
    margin: auto;
    .game__control {
      width: 100%;
      height: 40vh;
    }
  }
`;

export default GameControl;
