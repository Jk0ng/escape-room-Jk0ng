import './Circle.css'

const Circle = ({ color, className, onClick }) => {
    return (
        <div className={`Circle ${color || 'transparent'} ${className || ''}`}
            onClick={onClick}
        />
    )
}
export default Circle