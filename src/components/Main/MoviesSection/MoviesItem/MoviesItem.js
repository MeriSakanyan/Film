import React from 'react'
import Styles from './MoviesItemStyle'

function TopMoviesItem() {
  return (
    <Styles>
        <img src="https://movies.universalpictures.com/media/02-smb-dm-mobile-banner-1080x745-pl-f01-022723-63fe3cbc4df54-1.jpg" alt="" />
        <div>
            <p className='MoviesName'>film name</p>
            <p className='MoviesYear'>film year: <strong>9999</strong></p>
            <p className='MoviesTotalVotes'>total votes: <strong>9876</strong></p>
        </div>
    </Styles>
  )
}

export default TopMoviesItem