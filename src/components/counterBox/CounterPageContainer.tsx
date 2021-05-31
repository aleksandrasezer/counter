import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    ActionType,
    incrementCountAC,
    onChangeMaxValueAC,
    onChangeMinValueAC, resetCountAC,
    setCountAC
} from "../redux/counter-reducer";
import {RootState} from "../redux/redux-store";
import {SetCounter} from "./Setcounter";
import {Counter} from "./Counter";


export const CounterPageContainer = () => {

    const dispatch = useDispatch<Dispatch<ActionType>>()
    const {count, maxValue, minValue} = useSelector((state: RootState) => state.counterPage)

    const onChangeMaxVal = (maxValue: number) => dispatch(onChangeMaxValueAC(maxValue))
    const onChangeMinVal = (minValue: number) => dispatch(onChangeMinValueAC(minValue))
    const setCount = () => dispatch(setCountAC())
    const incrementF = () => dispatch(incrementCountAC())
    const resetF = () => dispatch(resetCountAC())

    return <>
        <>
            <SetCounter onChangeMaxVal={onChangeMaxVal}
                        onChangeMinVal={onChangeMinVal}
                        setCount={setCount}
                        maxValue={maxValue}
                        minValue={minValue}
            />
        </>

        <>
            <Counter incrementF={incrementF}
                     resetF={resetF}
                     count={count}
                     maxValue={maxValue}
                     minValue={minValue}
            />
        </>
    </>
}