import React from "react";
import styled from "styled-components";
import image from "../../image/image.png";

function Hero() {
  return (
    <Wrapper>
      <div className="hero">

        <div className="hero__column">
          <h1 className="hero__title">
            Motivate yourself to achieve your goals.
          </h1>
          <p className="hero__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            sequi, cumque, nemo aperiam voluptatum nostrum repellendus
            reprehenderit quibusdam explicabo perferendis omnis eligendi error
            odio ullam tenetur, blanditiis voluptas maiores amet!
          </p>
          <button className="hero__btn">Start Game!</button>
        </div>

        <div className="hero__image">
          <img className="hero__img" src={image} alt="aa" />
        </div>

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 90vh;
  background: var(--color-darkmain);
  display: grid;
  place-items: center;
  .hero {
    max-width: 1200px;
    width: 90%;
    display: flex;
    gap: 2rem;
    justify-content: space-around;
    margin:3rem 0;
    .hero__column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .hero__title {
        font-size: 3rem;
        font-weight: bold;
      }
      .hero__subtitle {
        max-width: 500px;
        font-size: 1rem;
        margin: 2rem 0;
      }
      .hero__btn {
        margin: 0 auto;
        width: fit-content;
        font-size: 1.5rem;
        padding: 10px 20px;
        border-radius: 10px;
        background: gold;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s linear;
        &:hover {
          color: gold;
          background: black;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      flex-direction: column;
      text-align: center;
    }
  }
  @media screen and (max-width: 480px) {
    .hero {
      .hero__column {
        .hero__title {
          font-size: 2rem;
        }
        .hero__btn {
          font-size: 1rem;
        }
      }
      .hero__img {
        width: 80%;
        object-fit: cover;
      }
    }
  }
`;

export default Hero;
