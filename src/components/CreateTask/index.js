import './style.scss'
import {useState} from "react";

const CreateTask = ({ Setter }) => {

    const [ name, SetName ] = useState('')
    const [ description, SetDescription ] = useState('')

    const handleName = (event) => {
        SetName(event.target.value)
    }

    const handleDescription = (event) => {
        SetDescription(event.target.value)
    }

    const CloseInput = () => {
        Setter(false)
    }

    const CreateTask = () => {
        const Task = {
            'TaskName' : name,
            'Description' : description
        }
        console.log(Task)
    }


    return (
        <div id={'CreateBody'}>
            <h3>New Task Creation</h3>
            <div id={'inputSection'}>
                <label>Name: </label>
                <input onInput={handleName} placeholder={'testeasasias'}/>
                <label id={'Description'}>Description: </label>
                <input  onInput={handleDescription} placeholder={'testeasasias'}/>
            </div>
            <button onClick={CreateTask}>Create</button>
            <button onClick={CloseInput}  id={'CancelButton'}>Cancel</button>
        </div>
    )
}

export default CreateTask