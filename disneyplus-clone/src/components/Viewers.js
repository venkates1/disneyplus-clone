import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="img1" />
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564674844-disney.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="img2" />
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676115-marvel.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="img3" />
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="img4" />
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1564676714-pixar.mp4" type="video/mp4"/>
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="img5" />
        <video autoPlay={true} loop={true} playsInline={true}>
            <source src="/videos/1608229455-star-wars.mp4" type="video/mp4"/>
        </video>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap:25px;
  padding:25px 0;

  @media (max-width:768px){
    grid-template-columns: repeat(1, minmax(0, 1fr));

  }
`;

const Wrap = styled.div`
border:1px solid rgba(249,249,249,0.1);
border-radius:10px;
box-shadow:rgb(0 0 0/ 69%) 0 26px 30px -10px,
rgb(0 0 0 /73%) 0px 16px 10px -10px;
cursor:pointer;
transition:all 250ms  cubic-bezier(0.25,0.46,0.45,0.94) 0s;
position:relative;

img{
    width:100%;
    height:100%;
    object-fit:cover;
    position:absolute;
}
video{
    width:100%;
    height:100%;
    opacity:0;
    z-index:0;
    border-radius:10px;
    
    &:hover{
        opacity:1;
        z-index:1;
    }
}

&:hover{
    border-color:rgba(249,249,249,0.8);
    transform:scale(1.05);
    box-shadow:rgb(0 0 0/ 80%) 0 40px 58px -16px,
rgb(0 0 0 /73%) 0px 30px 20px -10px;
}

`;


export default Viewers;
