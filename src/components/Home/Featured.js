import React from 'react';
import styled from 'styled-components';
import {AboutItem} from '..';
import {FeaturedList} from '../../utils/helper';

function Featured() {
  return (
    <Wrapper>
      <div className="featured">
        <h1 className="featured__title">Design Your Character Life 💫</h1>

        <div className="featured__box">
          {FeaturedList.map((item) => {
            return <AboutItem key={item.id} {...item} />;
          })}
        </div>
        <h1>이렇게 당신의 캐릭터를 꾸미세요 🎁</h1>
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
    letter-spacing: 0.3rem;
    line-height: 4rem;
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
      letter-spacing: 0.2rem;
    }
    .featured__box {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .featured {
      .featured__title {
        font-size: 2.5rem;
      }
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default Featured;
