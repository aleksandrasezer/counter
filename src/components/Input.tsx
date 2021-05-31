import React, {ChangeEvent} from "react";

type InputPropsType = {
    className: string
    onChange: (n: number) => void
    value: number
    limit: string
}

export function Input(props: InputPropsType) {

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
            props.onChange(+e.currentTarget.value)
        }
    }

    return (
        <>
            <span>{props.limit}</span>
            <input className={props.className}
                   type='number'
                   onChange={onChangeValueHandler}
                   value={props.value}/>
        </>
    )
}