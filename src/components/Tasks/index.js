import './style.scss'
import CreateTask from '../../assets/plus.png'
import Folder from '../../assets/folder.png'
import {useEffect, useState} from "react";
import CreateTaskForm from "../CreateTaskForm";
import { useSelector } from "react-redux";
import CloseTask from '../../assets/Close.png'
import Trash from '../../assets/Trash.png'
import Pomodoro from '../../assets/Pomodoro.png'
import ShortBreak from '../../assets/ShortBreak.png'
import LongBreak from '../../assets/LongBreak.png'
import { useDispatch } from "react-redux";
import {removeTask, updateTask} from "../../store/reducers/tasks";

const Tasks = ( { Color } ) => {

    const dispatch = useDispatch()

    const tasksFromState = useSelector((state) => state.tasks.tasks);

    const [ ConfirmTaskImage , SetConfirmTaskImage ] = useState(Pomodoro)

    const [ CreateTaskState, SetCreateTaskState ] = useState(false)

    const handleCreateState = () => {
        SetCreateTaskState(!CreateTaskState)
    }

    const deleteTask = (task) => {
        dispatch(removeTask(task))
    }

    const SetTaskAsCompleted = (task) => {
        dispatch(updateTask(task))
        console.log('Activated in Script')
    }

    useEffect(() => {
        console.log(tasksFromState);
    }, [tasksFromState]);

    useEffect(() => {
        if (Color === '#BA4949') {
            SetConfirmTaskImage(Pomodoro)
        } else if ( Color === '#38858A') {
            SetConfirmTaskImage(ShortBreak)
        } else if ( Color === '#397097' ) {
            SetConfirmTaskImage( LongBreak )
        }
    }, [Color]);

    return (
        <div className={'TasksContainer'}>
            <div className={'TasksHeader'}>
                <h2> Tasks </h2>
                <img onClick={handleCreateState} src={CreateTask} />
            </div>

            <div className={'TasksBody'}>
                <div className={'Line'}></div>

                { CreateTaskState ?
                    <div>
                        <CreateTaskForm TasksContent={tasksFromState} Color={Color} ChangeCreateState={SetCreateTaskState} />
                    </div> :
                    tasksFromState.length > 0 ?
                            <div className={'TasksWrapper'}>
                                { tasksFromState.map((task, index) => {
                                    return <div key={index}>
                                        <div className={'TaskContainer'}>
                                            <div>
                                                <p>{task.name}</p>
                                            </div>
                                            <div className={'ImageContainer'}>
                                                {
                                                    task.completed ? <img  onClick={() => deleteTask(task)} src={Trash}/>
                                                        :
                                                        <>
                                                            <img onClick={() => SetTaskAsCompleted(task)}
                                                                 src={ConfirmTaskImage}/>
                                                            <img onClick={() => deleteTask(task)}
                                                                 className={'CloseTask'} src={CloseTask}/>
                                                        </>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                }) }
                            </div> :
                            <div className={'EmptyContainer'}>
                                <img src={Folder} />
                                <div>
                                    <p>No Tasks</p>
                                    <p>Were Found</p>
                                </div>

                            </div>
                }
            </div>
        </div>
    )
}

export default Tasks