import {configureStore} from "@reduxjs/toolkit";
import pomodoroStateSlice from "./reducers/pomodoroState";
import tasks from "./reducers/tasks";
import tasksReducer from "./reducers/tasks";

const store = configureStore({
    reducer: {
        tasks: tasksReducer // Tasks reducer
    }
})

export default store