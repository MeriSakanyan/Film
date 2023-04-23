import Styles from './LeftSideStyle'
import styled from 'styled-components'
import { Select} from 'antd';
import  {useTranslation}  from 'react-i18next';

const FilmLogo = styled.img.attrs(({src}) => ({
  src: 'https://ifilm-f71a6.web.app/images/ifilm-dark-mode.png',
  alt: 'Image'
}))`
 width: 120px;
 height: 40px;
 @media (max-Width:1000px){
            margin-left: 40px;
        }
`

function LeftSide() {
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
    <FilmLogo />
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

export default LeftSide