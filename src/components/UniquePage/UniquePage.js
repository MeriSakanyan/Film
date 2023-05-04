import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Styles from './UniquePageStyle'
import { fetchUniquePageFilm } from '../../store/slice/uniquePage/uniquePageApi'
import { selectUniquePageFilm } from '../../store/slice/uniquePage/uniquePageSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Rate } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

function UniquePage() {
  const dispatch = useDispatch();
  const film = useSelector(selectUniquePageFilm);
  const { i18n} = useTranslation()
  const { id } = useParams() 
  console.log("id", id)
  const [value, setValue] = useState(3);
  
  
  useEffect(() => {
    dispatch(fetchUniquePageFilm({url:`${process.env.REACT_APP_BASE_URL}/movie/${id}?api_key=c90960472340983f37679878e271035a&language=${i18n.language}`}))
  }, [i18n.language, id])
  
  console.log("film", film)

   return (
    <Styles>
      <div className='UniquePage-section'>
        <div>
        <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${film.data?.poster_path}`} alt=""/>
        </div>
        
          <ul>
             <li className='Details_bg'><span>Title:</span> {film.data?.title}</li>
             <li><span>Original name:</span>{film.data?.original_title}</li>
             <li className='Details_bg'><span>Year:</span> Morbi leo risus</li>
             <li><span>Genre:</span> {film.data?.genres.map(({ name }) => name).join(', ')}</li>
             <li className='Details_bg'><span>Duration:</span> Duration: 103m.</li>
             <li><span>Country : </span> {film.data?.production_countries.map(({ name }) => name).join(', ')}</li>
             <li className='Details_bg'><span>Budget:</span>{film.data?.budget}$</li>
         </ul>
     
      </div>

      <div className='film-description'>
        <h5>About film</h5>
        <p>{film.data?.overview}</p>
      </div>
      <div>
      <Rate tooltips={desc} onChange={setValue} value={value} count={10} />
      </div>
      <div className='film-video'></div>
      <h5>Similar Movies</h5>
    </Styles>
  )
}

export default UniquePage



