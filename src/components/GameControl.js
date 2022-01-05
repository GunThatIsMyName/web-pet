import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ControlList from "./ControlList";

function GameControl() {
  return (
    <Wrapper className="game__control">
      <Outlet />
      <ControlList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 800px;
  height: 600px;
  background-color: #fff;
  position: relative;
  
`;

export default GameControl;
