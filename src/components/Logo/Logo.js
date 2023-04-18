import React from 'react'
import styled from 'styled-components'


const FilmLogo = styled.img.attrs(({src}) => ({
    src: 'https://ifilm-f71a6.web.app/images/ifilm-dark-mode.png',
    alt: 'Image'
}))`
   width: 120px;
   height: 40px;
   margin-top: 5px;
`

function Logo() {
  return (
    <FilmLogo />
  )
}

export default Logo