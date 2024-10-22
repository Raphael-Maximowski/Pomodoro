import './style.scss'
import Display from "../../components/Display";
import StartAndStop from "../../components/StartAndStop";
import Tasks from "../../components/Tasks";
import {useEffect, useState} from "react";


const Pomodoro = () => {

    const Colors = ['#BA4949','#38858A', '#397097' ]
    const [ Color, SetColor ] = useState('#BA4949')

    const Sequency = ['Short Break', 'Pomodoro', 'Short Break', 'Pomodoro', 'Short Break', 'Pomodoro', 'Long Break', ]

    const [ SequencyCounter, SetSequency ] = useState(0)

    const [ initialState, SetInitialState ] = useState('Pomodoro')

    const [ Minutes, SetMinutes ] = useState(0)
    const [ Seconds, SetSeconds ] = useState(0)

    const [ TimerState, SetTimerState ] = useState(false)

    const ActiveTimer = (value) => {
        SetTimerState(value)
    }

    useEffect(() => {
        if (TimerState) {
             const Interval = setInterval(() => {
                 SetSeconds(( prevSeconds ) => {
                     if ( prevSeconds === 0 ) {
                         SetMinutes((prevMinutes) => {
                             if ( prevMinutes === 0 ) {
                                 SetSequency( (prevSequency) => {
                                     SetInitialState(Sequency[prevSequency])
                                     if (prevSequency === 6) {
                                         SetSequency(0)
                                     } else {
                                         SetSequency( prevSequency + 1 )
                                     }
                                 })
                             } else {
                                 SetMinutes(prevMinutes - 1)
                                 SetSeconds(prevSeconds + 60)
                             }
                         })
                     } else { SetSeconds(prevSeconds - 1) }

                 })
            }, 1000)

            return () => clearInterval(Interval);
        }
    }, [ TimerState, Minutes, Seconds ]);

    useEffect(() => {
        if (initialState === 'Pomodoro') {
            SetMinutes(25)
            SetSeconds(0)
            SetColor(Colors[0])
        } else if (initialState === 'Short Break') {
            SetMinutes(5)
            SetSeconds(0)
            SetColor(Colors[1])
        } else if (initialState === 'Long Break') {
            SetMinutes(15)
            SetSeconds(0)
            SetColor(Colors[2])
        }
    }, [initialState])

    return (
        <main style={{ backgroundColor: Color }}>
            <section id={'DisplayContainer'}>
                <Display Color={Color} TypeSetter={SetInitialState} Seconds={Seconds} Minutes={Minutes} />
            </section>
            <section id={'StartStopContainer'}>
                <StartAndStop Color={Color} SetTimer={ActiveTimer} TimerValue={TimerState}  />
            </section>
            <section id={'TasksContainer'}>
                <Tasks/>
            </section>
        </main>
    )
}

export default Pomodoro