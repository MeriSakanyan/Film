import React from 'react'
import { Select} from 'antd';
import Styles from './SelectLanguageStyle'
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  

function SelectLanguage() {
  return (
   <Styles>
    <Select className='select'
      defaultValue="EN"
      onChange={handleChange}
      options={[
        {
          value: 'en',
          label: 'EN',
        },
        {
          value: 'ru',
          label: 'RU',
        },
      ]}
    />
   </Styles>
  )
}

export default SelectLanguage