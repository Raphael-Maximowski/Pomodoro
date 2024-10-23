import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}
const TasksSlice = createSlice({
    name: 'Tasks',
    initialState,
    reducers: {
        addTask : ( state, action ) => {
            state.tasks.push(action.payload)
        },

        removeTask: ( state, action ) => {
            const task = action.payload;
            const index = state.tasks.findIndex(StateTask => StateTask.id === task.id);
            state.tasks.splice(index, 1);
        },

        updateTask : (state, action) => {
            const task = action.payload;
            const index = state.tasks.findIndex(StateTask => StateTask.id === task.id);
            state.tasks[index] = {
                ...state.tasks[index],
                completed: true
            };
        }
    }
})

export const { addTask, removeTask, updateTask } = TasksSlice.actions

export default TasksSlice.reducer