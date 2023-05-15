import React from 'react';
import Styles from './MainStyle';

function Main({children}) {
  return (
    <Styles>
      {children}
    </Styles>
  )
}

export default Main