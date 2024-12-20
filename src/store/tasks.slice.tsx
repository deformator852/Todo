import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../interfaces/interface";


const initialState: Task[] = []
export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addNewTask(state, action: PayloadAction<Task>) {
            state.push(action.payload)
        }
    }
})

export const { actions, reducer } = tasksSlice