import React from 'react';
import styled from 'styled-components';

function AboutItem({id, image, name, subTitle}) {
  return (
    <Wrapper key={id} className="featured__item">
      <img className="image" src={image} alt={name} />
      <h2 className="featured__item__title">{name}</h2>
      <h3 className="featured__item__subtitle">{subTitle}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  text-align: center;
  color: white;
  .featured__item__title {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 2rem 0;
  }
  .featured__item__subtitle {
    font-size: 1.6rem;
  }
  p {
  }
  .image {
    width: 200px;

    object-fit: cover;
    margin: 0 1.5rem;
  }
  @media screen and (max-width: 408px) {
    .image {
      min-width: unset;
      width: 90%;
    }
  }
`;

export default AboutItem;
