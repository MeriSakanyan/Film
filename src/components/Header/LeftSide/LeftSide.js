import Styles from './LeftSideStyle'
import styled from 'styled-components'
import { Select} from 'antd';
import  {useTranslation}  from 'react-i18next';

const FilmLogo = styled.img.attrs(({src})  => ({
  src: src,
  alt: 'Image'
}))`
 width: 120px;
 height: 40px;
 @media (max-Width:1000px){
            margin-left: 40px;
        }
`

function LeftSide({isDarkThem}) {
  const { i18n} = useTranslation()
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const StyledMenu = styled.div`
  .ant-select-item-option-content {
    color: black;
  }
  
`;
  return (
    <Styles>
    <FilmLogo src={isDarkThem ? 'https://ifilm-f71a6.web.app/images/ifilm-dark-mode.png': 'https://ifilm-f71a6.web.app/images/ifilm.png'}/>
    <Select className='select'
    dropdownRender={(menu) => <StyledMenu>{menu}</StyledMenu>}
    onSelect={x=>{
      changeLanguage(x)
      }}
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