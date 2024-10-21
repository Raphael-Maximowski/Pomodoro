import './style.scss'
import Display from "../../components/Display";
import Tasks from "../../components/Tasks";

const Pomodoro = () => {
    return (
        <main>
            <section id={'DisplayContainer'}>
                <Display />
            </section>
            <section id={'TasksContainer'}>
                <Tasks />
            </section>
        </main>
    )
}

export default Pomodoro