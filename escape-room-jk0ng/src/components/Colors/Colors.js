import { color_options } from '../../constant'
import { useAppContext } from '../../context/Contexts'
import Circle from '../Circle/Circle'
import './Colors.css'
const Colors = () => {
    const [appState] = useAppContext()
    return (
        <div className='Colors'>
            {color_options.map(color =>
                <div className='item'>
                    <Circle
                        className={appState.currentColor === color ? 'active' : ''}
                        color={color}
                    />
                </div>)
            }
        </div>
    )
}
export default Colors