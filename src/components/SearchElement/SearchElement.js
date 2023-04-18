import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import Styles from './SearchElementStyle'



function SearchElement() {
  return (
    <Styles>
        <Input  placeholder="search" type='text'/>
        <Button size='small' type="search" >Search</Button>
    </Styles>
  )
}

export default SearchElement