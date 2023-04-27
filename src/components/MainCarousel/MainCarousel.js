import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import Slider from "react-slick";
import Styles from './MainCarouselStyle'
import CarouselItem from "./CarouselItem/CarouselItem";
import { useDispatch, useSelector } from "react-redux";
import  {useTranslation}  from 'react-i18next';
import { selectCarouselFilms } from "../../redux/slice/carouselFilms/carouselFilmsSlice";
import { fetchCarouselFilms } from "../../redux/slice/carouselFilms/carouselFilmsAPI";


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
  const films = useSelector(selectCarouselFilms);
  const { i18n} = useTranslation()

  useEffect(() => {
    dispatch(fetchCarouselFilms({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language])

  // console.log(film)

  // if (film.isLoading) {
  //   return <h1 style={{color: 'white'}}>Loading...</h1>
  // }

  return (
<Styles>
<div>
    <Slider {...settings}>
      {
        films.data.results && films.data.results.map((film) => 
        <div key={film.id}>
          <CarouselItem {...film}/>
        </div>
        )
      }
    </Slider>
  </div>
</Styles>
);
}



export default MainCarousel
        
