import React from "react";
import styled from "styled-components";

const image =
  "https://cdn.dribbble.com/users/5085092/screenshots/15704565/media/22d3003af8ef76a3f04e46313370b67d.jpg";
function Game() {
  return (
    <Wrapper back={image}>
      <div className="game__main"></div>
      <div className="game__control"></div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  .game__main {
    width: 300px;
    height: 300px;
    background: url(${(props) => props.back});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .game__control {
    width: 500px;
    height: 300px;
    background-color: orange;
  }
`;

export default Game;
