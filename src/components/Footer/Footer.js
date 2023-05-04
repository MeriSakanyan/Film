import React from 'react'
import Styles from './FooterStyle'
import styled from 'styled-components';

const FooterContent = styled.div`
    border: 1px solid #000;
    background-image: url(${"https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg"});
    width: 2000px;
    height: 2000px;

`;

function Footer() {
  return (
    <Styles>
       <FooterContent />
    </Styles>
  )
}

export default Footer