import React from 'react';
import styled from 'styled-components';

function Footer() {
  return <Wrapper>@ THIS IS LIVE DEMO</Wrapper>;
}
const Wrapper = styled.div`
  color: white;
  display: grid;
  place-content: center;
  background: var(--color-green);
  font-weight: bold;
  font-size: 1.2rem;
  height: 5vh;
`;
export default Footer;
