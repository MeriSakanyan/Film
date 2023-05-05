import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Styles from './SimilarMoviesStyle';
import CarouselItem from "../MainCarousel/CarouselItem/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import  {useTranslation}  from 'react-i18next';
import { selectCinemaMovies } from "../../store/slice/cinemaMovies/cinemaMoviesSlice";
import { fetchSimilarMovies } from "../../store/slice/similarMovies/similarMoviesApi"; 


const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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

function SimilarMovies() {
  const dispatch = useDispatch();
  const films = useSelector(selectCinemaMovies);
  const { i18n} = useTranslation()


  useEffect(() => {
    dispatch(fetchSimilarMovies({url:`${process.env.REACT_APP_BASE_URL}/movie/550/similar?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language])


  return (
<Styles>
    <Slider {...settings}>
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


