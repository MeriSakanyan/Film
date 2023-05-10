import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Styles from './SearchInputStyle'

 function SearchInput() {
  const [value, setvalue] = useState('')
    const { t } = useTranslation()
    const navigate = useNavigate();

    const searchSubmitHandler = () => {
      if(value){
        navigate('/search/'+value)
      }
    }
    
    const handleInputChange = (e) => {
      setvalue(e.target.value)
     
    }
  return (
    <Styles>
        <div className='search hamburgerelements'>
          <Input  placeholder="Search" type='text' onChange={handleInputChange}/>
          <Button size='small' type="search"
           onClick={searchSubmitHandler}>{t("header.searchButton")}
           </Button>
       </div> 
    </Styles>
  )
}

export default SearchInput