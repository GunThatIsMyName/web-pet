import React from "react";
import styled from "styled-components";
import { AboutItem } from "..";


function Featured() {


    const list = [
      {id:1,image:"https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" ,name:"Title",subTitle:"Subtitle something associated"},
      {id:2,image:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" ,name:"myself",subTitle:"I will be a good programmer"},
      {id:3,image:"https://images.unsplash.com/photo-1603038185130-ca1d5134c96f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" ,name:"mine",subTitle:"I'm gonna make architecture applications"}
    ]

  return <Wrapper>
    <div className="featured">
      <h1 className="featured__title">Gamify Your Life</h1>

      <div className="featured__box">
      {list.map(item=>{
        return(
          <AboutItem key={item.id} {...item} />
        )
      })}
      </div>
    </div>
  </Wrapper>;
}

const Wrapper = styled.section`
  min-height: 80vh;
  background: var(--color-brightmain);
  display:flex;
  justify-content:center;
  .featured{
    max-width:1200px;
    width:90%;
    margin:auto;
    margin-bottom:10rem;
    .featured__title{
      text-align:center;
      font-size:2rem;
      font-weight:bold;
      margin:4rem 0;
    }
    .featured__box{
      display:flex;
      justify-content:center;
      flex-wrap:wrap;
      gap:2rem;
    }
  }
`;

export default Featured;
