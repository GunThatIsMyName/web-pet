import React from 'react';
import styled from 'styled-components';
import {AboutItem} from '..';
import {FeaturedList} from '../../utils/helper';

function Featured() {
  return (
    <Wrapper>
      <div className="featured">
        <h1 className="featured__title">Design Your Character Life</h1>

        <div className="featured__box">
          {FeaturedList.map((item) => {
            return <AboutItem key={item.id} {...item} />;
          })}
        </div>
        <h1>이렇게 당신의 캐릭터를 꾸미세요 🎖</h1>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  background: var(--color-red);
  display: flex;
  justify-content: center;
  text-align: center;
  h1 {
    margin-top: 8rem;
    font-size: 3rem;
    font-weight: bold;
    color: black;
  }
  .featured {
    max-width: 1200px;
    width: 90%;
    margin: auto;
    margin-bottom: 10rem;
    .featured__title {
      text-align: center;
      font-size: 3rem;
      font-weight: bold;
      margin: 5rem 0;
      color: white;
    }
    .featured__box {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

export default Featured;
