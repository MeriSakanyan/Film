import React, { useEffect, useState } from 'react';
import Styles from './RightSideStyle';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import { Turn  as Hamburger } from 'hamburger-react';
import SearchInput from '../../SearchInput/SearchInput';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectMoviesList } from '../../../store/slice/moviesList/moviesListSlice';
import { fetchMoviesList } from '../../../store/slice/moviesList/moviesListApi';
import { selectCarouselFilms } from '../../../store/slice/carouselFilms/carouselFilmsSlice';

function RightSide({toggleTheme, isDarkThem}) {  
  const [isOpen, setOpen] = useState(false)
  const { t } = useTranslation()
  const [isToggled, setIsToggled] = useState(isDarkThem);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const films = useSelector(selectMoviesList);
  const { i18n} = useTranslation();
  const carouselFilms = useSelector(selectCarouselFilms);

  const onToggle =()=>{
    setIsToggled(!isToggled);
    toggleTheme();
  }

  console.log(films)

  const getRandomMovieHandler = () => {
    const randomMovieId = Math.floor(Math.random() * 20)
    navigate('movie/' + carouselFilms.data.results[randomMovieId].id)
  };

  useEffect(() => {
    dispatch(fetchMoviesList({url:`${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=c90960472340983f37679878e271035a&language=${i18n.language}&page=1`}))
  }, [i18n.language])

  return (
     <Styles>
        <Hamburger toggled={isOpen} toggle={setOpen} />
         {isOpen && 
          <> 
          <SearchInput />

          <div className='random hamburgerelements'>
            <label onClick={getRandomMovieHandler}>{t("header.random")}</label>
          </div>

          <div className='switch hamburgerelements'>
            <Switch size='small' checked={isToggled} onChange={onToggle} /> 
            <span className='mode'>{t("header.mode")}</span>
          </div>

          </>
         }

           <SearchInput />

          <div className='random  elements'>
            <label onClick={getRandomMovieHandler}>{t("header.random")}</label>
          </div>

          <div className='switch elements'>
            <Switch size='small' checked={isToggled} onChange={onToggle} />   
            <span className='mode'>{t("header.mode")}</span>
          </div>

     </Styles>
  )
}

export default RightSide