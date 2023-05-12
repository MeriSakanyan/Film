import React from 'react';
import Styles from './LoadingStyle';

function Loading() {
  return (
    <Styles>
        <div>
        <div className="lds-dual-ring"></div>
        </div>
    </Styles>
  )
}

export default Loading