import './style.scss'
import Button from "../Button";

const Display = () => {

    const ButtonsType = ['Pomodoro', 'ShortBreak', 'LongBreak'];

    return (
        <div className={'DisplayContainer'}>
            <div id={'TimerContainer'}>
                <h1>25:00</h1>
            </div>
            <div id={'ButtonsSection'}>
                {ButtonsType.map((button, index) => (
                    <Button
                        key={index}
                        type={button}
                    />
                ))}
            </div>
        </div>
    )
}

export default Display