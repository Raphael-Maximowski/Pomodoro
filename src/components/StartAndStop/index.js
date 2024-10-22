import './style.scss'

const StartAndStop = ( { SetTimer,  Color } ) => {

    const ChangeTimerState = (value) => {
        SetTimer(value)
    }

    return (
        <div className={'StartAndStopBody'}>
            <button style={{ color: Color }} onClick={() => ChangeTimerState(true)}>Start</button>
            <button style={{ color: Color }} onClick={() => ChangeTimerState(false)}>Stop</button>
        </div>
    )
}

export default StartAndStop