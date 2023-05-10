import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Suspense, useEffect } from "react";
import Slider from "react-slick";
import Styles from './MainCarouselStyle';
import CarouselItem from "./CarouselItem/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import  {useTranslation}  from 'react-i18next';
import { selectCarouselFilms } from "../../store/slice/carouselFilms/carouselFilmsSlice";
import { fetchCarouselFilms } from "../../store/slice/carouselFilms/carouselFilmsAPI";


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
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
  const films = useSelector(selectCarouselFilms);
  const { i18n} = useTranslation()

  useEffect(() => {
    dispatch(fetchCarouselFilms({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language])

  return (
  <Styles>
    <Slider {...settings}>
      {
        films.data.results && films.data.results.map((film) => 
        <div key={film.id}>
          <CarouselItem {...film}/>
        </div>
        )
      }
    </Slider>
  </Styles>
);
}

export default MainCarousel
        
