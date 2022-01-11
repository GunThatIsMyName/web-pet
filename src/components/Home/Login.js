import React from 'react';
import styled from 'styled-components';
import {useUserContext} from '../../context/UserContext';
import image from '../../image/image.png';

function Login() {
  const {loginAuth} = useUserContext();
  return (
    <Wrapper>
      <div className="hero">
        <div className="hero__column">
          <h2 className="hero__title">
            돈을 모아서 <br />
            나만의 캐릭터를 꾸며보세요 !
          </h2>
          <p className="hero__subtitle">
            혹시 어렸을 적에 했던 <br />
            다마고찌 게임을 기억하시나요 ? <br />
            그 기억을 살려 나의 다마고찌에게 밥을 먹이거나, <br /> 운동을
            시키거나 할 수 있는 행동으로 <br />
            돈을 모아서 나만이 꾸밀 수 있는 <br />
            다마고찌 캐릭터를 만들어보세요 ✨ <br />
          </p>
          <button onClick={loginAuth} className="hero__btn">
            Login
          </button>
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
  background: var(--color-yellow);
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
        max-width: 600px;
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
          color: var(--color-yellow);
          background: var(--color-white);
        }
      }
    }
    .hero__img {
      border-radius: 10px;
      margin-top: 5rem;
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
export default Login;
