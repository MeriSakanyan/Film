import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Styles from './MainCarouselStyle';
import CarouselItem from "./CarouselItem/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import  {useTranslation}  from 'react-i18next';
import { selectCarouselFilms } from "../../store/slice/carouselFilms/carouselFilmsSlice";
import { fetchCarouselFilms } from "../../store/slice/carouselFilms/carouselFilmsAPI";
import { mainCarouselSettings } from "./MainCarouselSettings";



function MainCarousel() {
  const dispatch = useDispatch();
  const films = useSelector(selectCarouselFilms);
  const { i18n} = useTranslation()
  
  useEffect(() => {
    dispatch(fetchCarouselFilms({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language])
  
  return (
  <Styles>
    <Slider {...mainCarouselSettings}>
      {
        films.data.results && films.data.results.map((film) => 
        <div key={film.id} >
          <CarouselItem {...film} />
        </div>
        )
      }
    </Slider>
  </Styles>
);
}

export default MainCarousel
        
