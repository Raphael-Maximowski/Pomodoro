import './style.scss'

const Button = ( { title }) => {
    return (
        <button className={'DisplayButton'}>
            { title }
        </button>
    )
}

export default Button