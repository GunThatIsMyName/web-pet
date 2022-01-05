import React from "react";
import styled from "styled-components";

const image =
  "https://firebasestorage.googleapis.com/v0/b/facebook-messenger-clone-8c670.appspot.com/o/images%2F%E1%84%86%E1%85%A9%E1%84%8C%E1%85%A11.png?alt=media&token=367d4e89-4138-43e3-ba02-0a6f8f2c0cc9";

  
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
