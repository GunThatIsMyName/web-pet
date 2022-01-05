import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ControlList from "./ControlList";

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
  .game__control {
    width: 800px;
    height: 600px;
    background-color: #fff;
    overflow-y: auto;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }
`;

export default GameControl;
