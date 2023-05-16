import React, { useEffect } from 'react';
import Styles from './FooterStyle';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieVideo } from '../../store/slice/movieVideo/movieVideoSlice'; 
import { fetchMovieVideo } from '../../store/slice/movieVideo/movieVideoApi';
import { useTranslation } from 'react-i18next';


function Footer() {
  const dispatch = useDispatch();
  const video = useSelector(selectMovieVideo);
  const { i18n } = useTranslation();

  
  useEffect(() => {
      dispatch(fetchMovieVideo({url:`${process.env.REACT_APP_BASE_URL}/movie/640146/videos?api_key=c90960472340983f37679878e271035a&language=${i18n.language}`}))
  }, [i18n.language])

  return (
    <Styles>
        <iframe
        data-v-2b09c3ac="" src={"https://www.youtube.com/embed/" + video.data?.results?.[0].key}
        title="YouTube video player" frameBorder="0" className="w-50 shadow-5 trailer-frame"
        loading='Lazy'
        />
        <p>Copyright © 2019 iFilm.com. All Rights Reserved.</p>
    </Styles>
  )
}

export default Footer