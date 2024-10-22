import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    color: '#BA4949',
    timer: '25000'
}
const pomodoroStateSlice = createSlice({
    name: 'pomodoroState',
    initialState
})

export default pomodoroStateSlice