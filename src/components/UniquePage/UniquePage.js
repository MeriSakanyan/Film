import React, { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Styles from './UniquePageStyle'

function UniquePage( {films} ) {
  const { id } = useParams() 
  const navigate = useNavigate()
  const formRef = useRef(null)
  
  return (
    <Styles>
    <div className='UniquePage'>
      <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/lpVgi7PPmh6tDVbenSoYVElaKCT.jpg" alt="" />

      {/* <img src = {`${process.env.REACT_APP_IMAGE_BASE_URL}/${{films.find(film => film.id === id).poster_path}}`} alt=""/> */}
        <div>
          <ul>
             <li>dddddddddddd</li>
             <li>Dapibus ac facilisis in</li>
             <li>Morbi leo risus</li>
             <li>Porta ac consectetur ac</li>
             <li>Duration: 103m.</li>
             <li>Genre: Spain,</li>
             <li>Budget: 0$</li>
         </ul>
        </div>
      </div>
      <div className='film-description'>
        <h5>About film</h5>
        <p>Spain, late 1980s. Newcomer Sara tries to fit in with the other teens
           in this tight-knit small town in the province of Tarragona. If only she
           were more like her extroverted best friend, Rebe. They go out one night
           at a nightclub, on the way home, they come upon a little girl holding
           a doll, dressed for her first communion. And that's when the nightmare begins.</p>
      </div>
 
      <div className='film-video'>
      </div>
      <h5>Similar Movies</h5>
    </Styles>
  )
}

export default UniquePage



