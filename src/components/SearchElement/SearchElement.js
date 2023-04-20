import React from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import Styles from './SearchElementStyle'
import { useTranslation } from 'react-i18next';

function SearchElement() {
  const { t } = useTranslation()
  return (
    <Styles>
        <Input  placeholder="search" type='text' />
        <Button size='small' type="search" > {t("searchButton")}</Button>
    </Styles>
  )
}

export default SearchElement