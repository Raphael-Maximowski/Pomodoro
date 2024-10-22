import './style.scss'

const Button = ( { title, SetType, Color }) => {

    const handleClick = () => {
        SetType(title)
    }

    return (
        <button style={{ color: Color }} onClick={handleClick} className={'DisplayButton'}>
            { title }
        </button>
    )
}

export default Button