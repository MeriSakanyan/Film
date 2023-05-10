import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Styles from './SimilarMoviesStyle';
import { useDispatch, useSelector } from "react-redux";
import  {useTranslation}  from 'react-i18next';
import { selectSimilarMovies } from "../../store/slice/similarMovies/similarMoviesSlice";
import { fetchSimilarMovies } from "../../store/slice/similarMovies/similarMoviesApi"; 
import CarouselItem from "../../components/MainCarousel/CarouselItem/CarouselItem"
import { similarMoviesSettings } from "../MainCarousel/MainCarouselSettings";
import { useParams } from "react-router-dom";

function SimilarMovies() {
  const dispatch = useDispatch();
  const films = useSelector(selectSimilarMovies);
  const { i18n} = useTranslation()
  const { id } = useParams() 


  useEffect(() => {
    dispatch(fetchSimilarMovies({url:`${process.env.REACT_APP_BASE_URL}/movie/${id}/similar?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language, id])

  
  return (
  <Styles>
    <h1 style={{color: "white"}}>Similar Movies</h1>
    <Slider {...similarMoviesSettings}>
      {
        films?.data?.results && films?.data?.results.map((film) => 
        <div key={film.id}>
          <CarouselItem {...film}/>
        </div>
        )
      }
    </Slider>
  </Styles>
  );
}

export default SimilarMovies


