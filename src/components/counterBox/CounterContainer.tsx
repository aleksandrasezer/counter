import {connect} from "react-redux";
import {AppDispatch, RootState} from "../redux/redux-store";
import {incrementCountAC, resetCountAC} from "../redux/counter-reducer";
import {Counter} from "./Counter";

let mapStateToProps = (state: RootState) => {
    return {
        count: state.counterPage.count,
        maxValue: state.counterPage.maxValue,
        minValue: state.counterPage.minValue,
    }
}
let mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        incrementF: () => dispatch(incrementCountAC()),
        resetF: () => dispatch(resetCountAC())
    }
}

export let CounterContainer = connect(mapStateToProps,mapDispatchToProps)(Counter)