import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { reducer as tasksReducer } from "./tasks.slice"

const reducers = combineReducers({
    tasks: tasksReducer
})
const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export default store