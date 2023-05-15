import React, { useEffect, useState } from 'react';
import Styles from './RightSideStyle';
import { Switch,  Button, Input } from 'antd';
import { useTranslation } from 'react-i18next';
import { Turn  as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectMoviesList } from '../../../store/slice/moviesList/moviesListSlice';
import { fetchMoviesList } from '../../../store/slice/moviesList/moviesListApi';
import { selectCarouselFilms } from '../../../store/slice/carouselFilms/carouselFilmsSlice';

function RightSide({toggleTheme, isDarkThem}) {  
  const [isOpen, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const [isToggled, setIsToggled] = useState(isDarkThem);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const films = useSelector(selectMoviesList);
  const carouselFilms = useSelector(selectCarouselFilms);
  const [value, setvalue] = useState('')

  const searchSubmitHandler = () => {
    if(value){
      navigate('/search/'+value)
    }
  }
  
  const handleInputChange = (e) => {
    setvalue(e.target.value)
  }

  const onToggle =()=>{
    setIsToggled(!isToggled);
    toggleTheme();
  }

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
            <div className='search hamburgerelements'>
               <Input  placeholder="Search"  type='text' onChange={handleInputChange}/>
               <Button size='small' type="search" onClick={searchSubmitHandler}>{t("header.searchButton")}
               </Button>
            </div> 

            <div className='random hamburgerelements'>
               <label onClick={getRandomMovieHandler}>{t("header.random")}</label>
            </div>

            <div className='switch hamburgerelements'>
               <Switch size='small' checked={isToggled} onChange={onToggle} /> 
               <span className='mode'>{t("header.mode")}</span>
            </div>
          </>
         }

            <div className='search elements'>
               <Input  placeholder="Search"  type='text' onChange={handleInputChange}/>
               <Button size='small' type="search" onClick={searchSubmitHandler}>{t("header.searchButton")}
               </Button>
            </div> 

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