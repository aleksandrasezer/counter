import {RootState} from "./redux-store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state');
        return (serializedState === null) ? undefined : JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('app-state', serializedState);
    } catch {
        // ignore write errors
    }
};