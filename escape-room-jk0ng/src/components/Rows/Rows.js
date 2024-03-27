import './Rows.css'
const Rows = () => {
    return (
        <div className='Rows'>
            {new Array(10).fill().map((value, index) =>
                <div className='Row' key={index}>
                    {index + 1}
                </div>)}
        </div>
    )
}

export default Rows


