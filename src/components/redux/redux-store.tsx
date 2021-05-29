import {counterReducer} from "./counter-reducer";
import {combineReducers, createStore} from "redux";
import {loadState, saveState} from "./localStorage";

let reducers = combineReducers({
    counterPage: counterReducer
})

export let store = createStore(reducers, loadState())

store.subscribe(() => {
    saveState({
        counterPage: store.getState().counterPage
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch