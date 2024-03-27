import { color_options } from '../../constant'
import Circle from '../Circle/Circle'
import './Colors.css'
const Colors = () => {
    return(
        <div className='Colors'>
           {color_options.map(color =>
           <div className='item'>
            <Circle color={color}/>
            </div>)}
        </div>
    )
}
export default Colors