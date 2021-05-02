import React, {useEffect} from "react";
import {Button} from "./Button";
import {Setcounter} from "./Setcounter";

type CounterPropsType = {
    num: number
    incrementF: () => void
    resetF: () => void
    maxValue: number
    minValue: number
    isValueSet: boolean
}

export function Counter(props: CounterPropsType) {
    const changeColor = () => props.num === props.maxValue ? 'numberRed' : 'number'
    let numToShow = props.minValue < 0 || props.maxValue > 10 ? 'acceptable numbers: 0 to 10' : props.num

    return (
        <div className='container'>

            <div className={changeColor()}>{props.isValueSet ? numToShow : 'choose your range'}</div>


            <div className='buttonsContainer'>
                <Button disabled={props.num === props.maxValue}
                        onClick={props.incrementF}
                        title='inc' />
                <Button onClick={props.resetF}
                        disabled={props.num === props.minValue}
                        title='reset'/>

            </div>
        </div>

    )
}