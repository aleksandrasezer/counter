import React from "react";
import {Button} from "../Button";


type CounterPropsType = {
    count: number
    incrementF: () => void
    resetF: () => void
    maxValue: number
    minValue: number
}

export function Counter(props: CounterPropsType) {
    const changeColor = () => props.count === props.maxValue ? 'numberRed' : 'number'
    let numToShow = props.minValue < 0 || props.maxValue > 10 ? 'acceptable numbers: 0 to 10' : props.count

    return (
        <div className='container'>

            <div className={changeColor()}>{numToShow}</div>


            <div className='buttonsContainer'>

                <Button disabled={props.count === props.maxValue}
                        onClick={props.incrementF}
                        title='inc' />

                <Button onClick={props.resetF}
                        disabled={props.count === props.minValue}
                        title='reset'/>

            </div>
        </div>

    )
}