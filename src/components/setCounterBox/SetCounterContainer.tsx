import {connect} from "react-redux";
import {AppDispatch, RootState} from "../redux/redux-store";
import {onChangeMaxValueAC, onChangeMinValueAC, setCountAC} from "../redux/counter-reducer";
import {SetCounter} from "./Setcounter";

let mapStateToProps = (state: RootState) => {
    return {

        maxValue: state.counterPage.maxValue,
        minValue: state.counterPage.minValue
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        onChangeMaxVal: (maxValue: number) => dispatch(onChangeMaxValueAC(maxValue)),
        onChangeMinVal: (minValue: number) => dispatch(onChangeMinValueAC(minValue)),
        setCount: () => dispatch(setCountAC())
    }
}

export let SetCounterContainer = connect(mapStateToProps,mapDispatchToProps)(SetCounter)