import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  text-align: center;
 
  

`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-bottom: 10vw;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const BgImage = styled.div`
  background-image: url("/images/banner.jpg");
  position: absolute;
  background-repeat: no-repeat;
  height: 100%;
  background-position: bottom;
  top:0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding: 0 20px;
`;
const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  width: 100%;
`;

const Signup = styled.a`
  font-weight: bold;
  font-size: 20px;
  color: #f9f9f9;
  background-color: #0063e5;
  padding: 16px 0;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #0483ee;
    text-decoration:none;
    color:white;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.2px;
`;

const CTALogoTwo = styled.img`
  margin-bottom: 20px;
  max-width:600px;
  display: block;
  width:100%;
`;

function Login() {
  return (
    <Container>
      <Content>
        <BgImage />
        <CTA>
          <CTALogoOne src="images/cta-logo-one.svg" alt="" />
          <Signup>GET ALL HERE</Signup>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription.
          </Description>
          <CTALogoTwo src="images/cta-logo-two.png" alt="" />
        </CTA>
      </Content>
    </Container>
  );
}

export default Login;
