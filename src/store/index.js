import {configureStore} from "@reduxjs/toolkit";
import pomodoroStateSlice from "./reducers/pomodoroState";
import tasks from "./reducers/tasks";

const Store = configureStore({
    reducer: {
        pomodoroState : pomodoroStateSlice,
        tasks : tasks
    }
})

export default Store