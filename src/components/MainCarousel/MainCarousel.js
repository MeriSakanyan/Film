import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Styles from './MainCarouselStyle'
import CarouselItem from "./CarouselItem/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import  {useTranslation}  from 'react-i18next';
import { fetchCarouselFilms } from "../../redux/slice/carouselFilm";


  
const settings = {
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
  const carouselFilmstate = useSelector((state) => state.carouselFilm);
  const { i18n} = useTranslation()

  useEffect(() => {
  dispatch(fetchCarouselFilms( {url:`https://api.themoviedb.org/3/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=${1}`}))
  }, [i18n.language])


  if (carouselFilmstate.isLoading) {
    return <h1>Loading...</h1>
  }

  return (
<Styles>
<div>
    <Slider {...settings}>
      {
        carouselFilmstate.data.results && carouselFilmstate.data.results.map((film,index) => 
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
        
