import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slideToShow:2,
    slidesToScroll: 1,
    autoplay:true,
    
  };
  return (
     
      <Carousel {...settings}>
          <Wrap>
              <img src="/images/slider-badag.jpg"/>
          </Wrap>
          <Wrap>
              <img src="/images/slider-badging.jpg"/>
          </Wrap>
          <Wrap>
              <img src="/images/slider-scale.jpg"/>
          </Wrap>
          <Wrap>
              <img src="/images/slider-scales.jpg"/>
          </Wrap>
      </Carousel>
      
    
  );
}
const Carousel = styled(Slider)`

margin-top:15px;

ul li button{
    &:before{
        font-size:10px;
        color:rgb(255,255,255);
    }
}
li.slick-active button::before{
    color:white;
}

button{
    z-index:1;
}
.slick-list{
    overflow:visible;
}`;
const Wrap = styled.div`

img{
    border-radius:5px; 
    width:100%;
    height:100%;
    box-shadow:rgb(0 0 0/ 69%) 0 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    border:4px solid transparent;
    transition-duration:500ms;

    &:hover{
        border:4px solid #f9f9f9;
        
    }
    
}
`;

export default ImgSlider;
