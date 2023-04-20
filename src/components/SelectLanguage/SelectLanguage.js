import React from 'react'
import { Select} from 'antd';
import Styles from './SelectLanguageStyle'
import  {useTranslation}  from 'react-i18next';
import styled from "styled-components";

function SelectLanguage() {
  const { i18n} = useTranslation()
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const StyledMenu = styled.div`
  .ant-select-item-option-content {
    color: white;
  }
`;

  return (
   <Styles>
    <Select className='select'
      dropdownRender={(menu) => <StyledMenu>{menu}</StyledMenu>}
      onSelect={x=>{
        changeLanguage(x)
        console.log(x)}}
      defaultValue="EN"
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