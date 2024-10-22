import './style.scss'
import {useState} from "react";

const CreateTaskForm = ( { ChangeCreateState } ) => {

    const [ Name, SetName ] = useState('')
    const [ Description, SetDescription ] = useState('')

    const handleName = (event) => {
        SetName(event.target.value)
    }

    const handleDescription = (event) => {
        SetDescription(event.target.value)
    }

    const CreateTask = () => {
        const Task = {
            name: Name,
            description: Description
        }

        handleCick()
        console.log(Task)
    }

    const handleCick = () => {
        ChangeCreateState(false)
    }

    return (
        <>
            <div className={'InputContainer'}>
                <form>
                    <div>
                        <label>
                            Name:
                        </label>
                        <input
                            onChange={handleName}
                            type={"text"}
                            placeholder={'Inset a Name'}
                        />
                    </div>
                    <div>
                        <label>
                            Description:
                        </label>
                        <input
                            onChange={handleDescription}
                            type={"text"}
                            placeholder={'Insert a Description'}
                        />
                    </div>
                </form>
            </div>
            <div className={'CreateTask'}>
                <button onClick={CreateTask}>Create</button>
                <button onClick={handleCick} className={'CancelButton'}>Cancel</button>
            </div>
        </>
    )
}

export default CreateTaskForm