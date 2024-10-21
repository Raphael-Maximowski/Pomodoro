import './style.scss'
import plusIcon from '../../assets/plus.png';
import folder from '../../assets/folder.png'
import {useState} from "react";
import CreateTask from "../CreateTask";

const Tasks = () => {

    const Task =  []
    const [ CreateTaskState, SetState ] = useState(false)


    const changeCreateState = () => {
        console.log(!CreateTaskState)
        SetState(!CreateTaskState)
    }

    return (
         <div className={'TasksContainer'}>
            <div id={'TasksTitle'}>
                <h2>Tasks Section</h2>
                <img onClick={changeCreateState} src={plusIcon} />
            </div>
            <div id={'TasksBody'}>
                <div id={'Line'}></div>
                { CreateTaskState ? (
                    <div>
                        <CreateTask Setter={SetState} />
                    </div>
                ) : Task.length > 0 ?
                        <div>teste</div>
                        :  <div id={'emptyContainer'}>
                            <img src={folder} />
                            <div>
                                <h3>No Task</h3>
                                <h3>was Found</h3>
                            </div>
                        </div>
                }

            </div>
         </div>
    )
}

export default Tasks