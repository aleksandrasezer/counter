import React, {ChangeEvent, ChangeEventHandler} from "react";
import {Button} from "./Button";

type SetcounterPropsType = {
    maxValueChanged: (v: number) => void
    minValueChanged: (v: number) => void
    maxValue: number
    minValue: number
    setValues: () => void
}

export function Setcounter(props: SetcounterPropsType) {
    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueChanged(+e.currentTarget.value)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.minValueChanged(+e.currentTarget.value)
    }
    const minInputClassName = props.minValue < 0 ? 'error' : ''
    const maxInputClassName = props.maxValue > 10 ? 'error' : ''

    return (
        <div className='container'>
            <div className='number'>
                <div>
                    <span>max value: </span>
                    <input className={maxInputClassName}
                           type='number'
                           onChange={onChangeMaxValueHandler}
                           value={props.maxValue}/>
                </div>
                <div>
                    <span>min value: </span>
                    <input className={minInputClassName}
                           type='number'
                           onChange={(onChangeMinValueHandler)}
                           value={props.minValue}/>
                </div>
            </div>
            <div className='buttonsContainer'>
                <Button disabled={props.minValue < 0 || props.maxValue > 10}
                        onClick={props.setValues}
                        title='set'/>


            </div>
        </div>
    )
}