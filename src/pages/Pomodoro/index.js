import './style.scss'
import Display from "../../components/Display";
import StartAndStop from "../../components/StartAndStop";
import Tasks from "../../components/Tasks";


const Pomodoro = () => {
    return (
        <main>
            <section id={'DisplayContainer'}>
                <Display />
            </section>
            <section id={'StartStopContainer'}>
                <StartAndStop />
            </section>
            <section id={'TasksContainer'}>
                <Tasks/>
            </section>
        </main>
    )
}

export default Pomodoro