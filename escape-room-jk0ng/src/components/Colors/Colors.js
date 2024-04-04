import { color_options } from '../../constant'
import { useAppContext } from '../../context/Contexts'
import Circle from '../Circle/Circle'
import './Colors.css'
import { setColor } from '../../reducer/actions'
const Colors = () => {
    const [appState, dispatch] = useAppContext()
    return (
        <div className='Colors'>
            {color_options.map(color =>
                <div className='item'>
                    <Circle
                        className={appState.currentColor === color ? 'active' : ''}
                        color={color}
                        onClick={() => dispatch(setColor(color))}
                    />
                </div>)
            }
        </div>
    )
}
export default Colors