import React from "react";
import styled from "styled-components";

function Footer() {
  return <Container>
      &copy; 2021. Venkatesh Agrawal
  </Container>;
}

const Container = styled.div`
  background-color: #000;
  
  z-index:-1;
  position:relative;
  left:0;
  right:0;
height:50px;
display:flex;
align-items:center;
justify-content:center;
    top:1730px;


    @media (max-width:500px){
        top:3100px;
    }
    
    @media (min-width:501px) and (max-width:700px){
        top:3500px;
    }
   
  `;

export default Footer;
