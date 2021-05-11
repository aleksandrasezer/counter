import React, {ChangeEvent} from "react";

type InputPropsType = {
    className: string
    onChange: (n: number) => void
    value: number
}

export function Input(props: InputPropsType) {

    const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) =>
        props.onChange(+e.currentTarget.value)

    return (
        <>
            <input className={props.className}
                   type='number'
                   onChange={onChangeValueHandler}
                   value={props.value}/>
        </>
    )
}