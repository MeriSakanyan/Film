import React from 'react';
import Styles from './SpinerStyle';

function Spinner() {
  return (
    <div>
        <Styles>
            <div className="lds-spinner"><div>
            </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </Styles>
    </div>
  )
}

export default Spinner