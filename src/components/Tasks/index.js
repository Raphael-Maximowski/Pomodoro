import './style.scss'
import CreateTask from '../../assets/plus.png'
import Folder from '../../assets/folder.png'
import {useState} from "react";
import CreateTaskForm from "../CreateTaskForm";

const Tasks = () => {

    const Tasks = []

    const [ CreateTaskState, SetCreateTaskState ] = useState(false)

    const handleCreateState = () => {
        console.log(CreateTaskState)
        SetCreateTaskState(!CreateTaskState)
    }

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
                    Tasks.length > 0 ?
                            <div>
                                teste
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