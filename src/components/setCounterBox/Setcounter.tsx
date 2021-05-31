import React from "react";
import {Button} from "../Button";
import {Input} from "../Input";

type SetcounterPropsType = {
    onChangeMaxVal: (v: number) => void
    onChangeMinVal: (v: number) => void
    maxValue: number
    minValue: number
    setCount: () => void
}

export function SetCounter(props: SetcounterPropsType) {

    const onChangeMaxValueHandler = (maxVal: number) => props.onChangeMaxVal(maxVal)
    const onChangeMinValueHandler = (minVal: number) => props.onChangeMinVal(minVal)

    const minInputClassName = props.minValue < 0 ? 'error' : ''
    const maxInputClassName = props.maxValue > 10 ? 'error' : ''

    const disabled = props.minValue < 0 || props.maxValue > 10 || props.maxValue < props.minValue
    return (
        <div className='container'>
            <div className='number'>
                <div>
                    <Input className={maxInputClassName}
                           onChange={onChangeMaxValueHandler}
                           value={props.maxValue}
                           limit='max value: '/>

                </div>

                <div>
                    <Input className={minInputClassName}
                           onChange={onChangeMinValueHandler}
                           value={props.minValue}
                           limit='min value: '/>
                </div>
            </div>
            <div className='buttonsContainer'>
                <Button disabled={disabled}
                        onClick={props.setCount}
                        title='set'/>
            </div>
        </div>
    )
}