import React from 'react';
import Styles from './FilmDetailsStyle';
import MainCarousel from '../MainCarousel/MainCarousel'
function FilmDetails() {
  return (
    <Styles>
      <div className='film-details'>
      <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2/lpVgi7PPmh6tDVbenSoYVElaKCT.jpg" alt="" />
        <div>
          <ul>
             <li>Cras justo odio</li>
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
      {/* <MainCarousel/> */}

      </div>
    </Styles>
  )
}

export default FilmDetails




