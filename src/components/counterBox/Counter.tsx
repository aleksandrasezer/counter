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

    const disabledInc = props.count === props.maxValue
    const disabledReset = props.count === props.minValue

    return (
        <div className='container'>

            <div className={changeColor()}>
                {numToShow}
            </div>

            <div className='buttonsContainer'>

                <Button onClick={props.incrementF}
                        disabled={disabledInc}
                        title='inc'/>

                <Button onClick={props.resetF}
                        disabled={disabledReset}
                        title='reset'/>

            </div>
        </div>

    )
}