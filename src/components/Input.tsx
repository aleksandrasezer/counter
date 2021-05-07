import React, {ChangeEvent} from "react";

type InputPropsType = {
    className: string
    type: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
}

export function Input(props: InputPropsType) {
    return (
        <>
            <input className={props.className}
                   type={props.type}
                   onChange={props.onChange}
                   value={props.value}/>
        </>
    )
}