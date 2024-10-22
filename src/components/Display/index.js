import './style.scss'
import Button from "../Button";

const ButtonTitle = ['Pomodoro', 'Short Break', 'Long Break']

const Display =  () => {
    return (
        <div className={'DisplayContainer'}>
            <div className={'DisplayHeader'}>
                <h1>25:00</h1>
            </div>
            <div className={'DisplayBody'}>
                { ButtonTitle.map((title, index) => {
                    return ( <Button key={index} title={title} /> )
                }) }
            </div>
        </div>
    )
}

export default Display