
const ON_CHANGE_MAX_VALUE = 'ON_CHANGE_MAX_VALUE'
const ON_CHANGE_MIN_VALUE = 'ON_CHANGE_MIN_VALUE'
const INCREMENT_COUNT = 'INCREMENT_COUNT'
const RESET_COUNT = 'RESET_COUNT'
const SET_COUNT = 'SET_COUNT'

type ActionType = ReturnType<typeof onChangeMaxValueAC> |
    ReturnType<typeof onChangeMinValueAC> | ReturnType<typeof incrementCountAC> |
    ReturnType<typeof resetCountAC> | ReturnType<typeof setCountAC>

type InitialStateType = {
    minValue: number
    maxValue: number
    count: number
}

let initialState = {
    minValue: 0,
    maxValue: 10,
    count: 0
}



export let counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case ON_CHANGE_MAX_VALUE:
            return {...state, maxValue: action.maxValue}

        case ON_CHANGE_MIN_VALUE:
            return {...state, minValue: action.minValue}

        case INCREMENT_COUNT:
            return {...state, count: state.count + 1}

        case RESET_COUNT:
            return {...state, count: state.minValue}

        case SET_COUNT:
            return {...state, count: state.minValue}

        default: return state
    }
}

export const onChangeMaxValueAC = (maxValue: number) => {
    return {
        type: ON_CHANGE_MAX_VALUE,
        maxValue
    } as const
}
export const onChangeMinValueAC = (minValue: number) => {
    return {
        type: ON_CHANGE_MIN_VALUE,
        minValue
    } as const
}
export const incrementCountAC = () => {
    return {
        type: INCREMENT_COUNT
    } as const
}
export const resetCountAC = () => {
    return {
        type: RESET_COUNT
    } as const
}
export const setCountAC = () => {
    return {
        type: SET_COUNT
    } as const
}


