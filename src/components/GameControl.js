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
  width: 500px;
  height: 400px;
  background-color: orange;
  position: relative;
  
  @media screen and (max-width:991px){
    flex-direction:column;
    gap:0;
    width:400px;
  }
`;

export default GameControl;
