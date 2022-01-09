import React from "react";
import styled from "styled-components";

function AboutItem({ id, image, name, subTitle }) {
  return (
    <Wrapper key={id} className="featured__item">
      <img className="image" src={image} alt={name} />
      <h2 className="featured__item__title">{name}</h2>
      <p>{subTitle}</p>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  text-align: center;
  .featured__item__title {
    font-size: 1.4rem;
    font-weight: bold;
  }
  p {
  }
  .image {
    width: 100%;
    min-width: 280px;
    height: 300px;
    object-fit: cover;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 408px) {
    .image {
        min-width: unset;
      width: 90%;
    }
  }
`;

export default AboutItem;
