import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import image from '../../image/image.png';

function Hero() {
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero__column">
          <h1 className="hero__title">킹받는 게임 🤬 </h1>
          <p className="hero__subtitle">
            내 캐릭터를 마음대로 꾸며서
            <br /> 서로를 킹받게 해보세요! <br />
            나의 친구들 모두모두 불러모아 <br />
            함께 캐릭터를 꾸민 후에 <br />
            다른 유저들의 캐릭터도 확인해보세요
          </p>
          <Link to="/game">
            <button className="hero__btn">Start Game</button>
          </Link>
        </div>

        <div className="hero__image">
          <img className="hero__img" src={image} alt="aa" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 93.5vh;
  background: var(--color-orange);
  display: grid;
  place-items: center;
  color: black;

  .hero {
    max-width: 1200px;
    width: 90%;
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    margin: 3rem 0;
    .hero__column {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .hero__title {
        font-size: 3rem;
        font-weight: bold;
        letter-spacing: 0.2rem;
        line-height: 4rem;
      }
      .hero__subtitle {
        max-width: 400px;
        font-size: 1.4rem;
        letter-spacing: 0.4rem;
        line-height: 2.2rem;
        margin: 3rem 0;
        font-weight: bold;
      }
      .hero__btn {
        margin: 0 auto;
        width: fit-content;
        font-size: 1.5rem;
        padding: 10px 20px;
        border-radius: 10px;
        border: 3px solid white;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s linear;
        color: var(--color-white);
        &:hover {
          color: var(--color-orange);
          background: var(--color-white);
        }
      }
    }
    .hero__img {
      border-radius: 10px;
      margin-top: 3rem;
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
      margin: 5rem 0;
      .hero__column {
        .hero__title {
          font-size: 2.2rem;
        }
        .hero__subtitle {
          font-size: 1.2rem;
        }
        .hero__subtitle {
          max-width: 400px;
          margin: 2rem auto;
        }
        .hero__btn {
          font-size: 1rem;
        }
      }
      .hero__img {
        margin-top: 2rem;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .hero {
      .hero__column {
      }
      .hero__img {
        width: 80%;
        object-fit: cover;
      }
    }
  }
`;

export default Hero;
