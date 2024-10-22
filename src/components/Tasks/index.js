import './style.scss'
import CreateTask from '../../assets/plus.png'
import Folder from '../../assets/folder.png'
import {useEffect, useState} from "react";
import CreateTaskForm from "../CreateTaskForm";
import { useSelector } from "react-redux";

const Tasks = () => {

    const Tasks = []

    const tasksFromState = useSelector((state) => state.tasks.tasks);

    const [ CreateTaskState, SetCreateTaskState ] = useState(false)

    const handleCreateState = () => {
        SetCreateTaskState(!CreateTaskState)
    }

    useEffect(() => {
        console.log(tasksFromState);
    }, [tasksFromState]);

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
                        <CreateTaskForm ChangeCreateState={SetCreateTaskState} />
                    </div> :
                    tasksFromState.length > 0 ?
                            <div>
                                { tasksFromState.map((task, index) => {
                                    return <div>Em desenvolvimento</div>
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