import React, { useEffect } from 'react'
import Styles from './FooterStyle'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieVideo } from '../../store/slice/movieVideo/movieVideoSlice'; 
import { fetchMovieVideo } from '../../store/slice/movieVideo/movieVideoApi';
import { useParams } from 'react-router-dom';


  
const FooterContent = styled.div`
    border: 1px solid #000;
    background-image: url(${"https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"});
    min-height: 650px;
    background-position: 50%;
    background-size: cover;
    background-attachment: fixed;
    transition: all .5s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 200px;
`;


function Footer() {
  const dispatch = useDispatch();
  const video = useSelector(selectMovieVideo);
  const { id } = useParams() 

   useEffect(() => {
   
  dispatch(fetchMovieVideo({url:`https://api.themoviedb.org/3/movie/28055/videos?api_key=c90960472340983f37679878e271035a&language=en-US`}))
  console.log(123123, video);
}, [id])

  return (
    <Styles>
       <FooterContent />
       <div></div>
    </Styles>
  )
}

export default Footer