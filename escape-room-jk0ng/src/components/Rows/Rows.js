import Circle from '../Circle/Circle'
import './Rows.css'
const Rows = () => {
    return (
        <div className='Rows'>
            {new Array(10).fill().map((value, index) =>
                <div className='Row' key={index}>
                    <div> {index + 1} </div>
                    <div className='Circles'>
                        <Circle/>
                        <Circle/>
                        <Circle/>
                        <Circle/>
                    </div>
                    <div className='Hints'>
                        <Circle/>
                        <Circle/>
                        <Circle/>
                        <Circle/>
                         </div>
                </div>)}
        </div>
    )
}

export default Rows
