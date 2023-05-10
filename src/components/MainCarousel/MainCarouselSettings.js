
export const mainCarouselSettings = {
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
          dots: false,
          arrows: true
        }
      }
    ]
  };


  
export const similarMoviesSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    dots: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll:1,
          dots: false,
          arrows: true
        }
      }
    ]
  };
