import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}
const TasksSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        addTask : ( state, action ) => {
            console.log('Actual State: ', state)
            console.log('Task Received: ', action.payload)
            state.tasks.push(action.payload)
        }
    }
})

export const { addTask } = TasksSlice.actions

export default TasksSlice.reducer