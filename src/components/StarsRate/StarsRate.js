import { Rate } from 'antd'
import Styles from './StarsRateStyle'

const StarsRate = (props) => {
    return (
        <Styles>
            <Rate {...props}/>
        </Styles>
    )
}

export default StarsRate