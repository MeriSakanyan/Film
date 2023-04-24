import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Styles from './MainCarouselStyle'
import CarouselItem from "./CarouselItem/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilms } from "../../redux/slice/film";
import  {useTranslation}  from 'react-i18next';


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
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { i18n} = useTranslation()

  useEffect(() => {
  dispatch(fetchFilms( { language:i18n.language, page:1}))
  }, [i18n.language])


  if (state.film.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
<Styles>
<div>
    <Slider {...settings}>
      {
        state.film?.data?.results && state.film?.data?.results.map((film,index) => 
        <div key={index}>
          <CarouselItem film={film}/>
        </div>
    
        )
      }
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
