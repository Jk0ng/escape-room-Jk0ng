import Circle from '../Circle/Circle'
import { useAppContext } from '../../context/Contexts'
import './Rows.css'


const Rows = () => {

    const [appState] = useAppContext()
    const { currentRow } = appState

    return (
        <div className='Rows'>
            {new Array(10).fill().map((value, index) =>
                <div className={`Row ${index === currentRow ? 'active' : ''}`} key={index}>
                    <div> {index + 1} </div>
                    <div className='Circles'>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </div>
                    <div className='Hints'>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </div>
                </div>)}
        </div>
    )
}

export default Rows
