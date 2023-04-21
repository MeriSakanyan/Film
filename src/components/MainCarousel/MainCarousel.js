import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import Styles from './MainCarouselStyle'
import CarouselItem from "./CarouselItem/CarouselItem";

var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // infinite: true,
          // dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    ]
  };


function MainCarousel() {
  return (
<Styles>
<div>
    <Slider {...settings}>
      <div>
        <CarouselItem/>
      </div>
      <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div> <div>
        <CarouselItem/>
      </div>
    </Slider>
  </div>
</Styles>
);
}



export default MainCarousel
            // <Slider {...settings}>
            //   {[1, 2, 3, 4].map((item, index) => {
            //     return <div key={index}>{item}</div>
            //   })}
            // </Slider> 
