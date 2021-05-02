import React, {MouseEventHandler} from "react";

type ButtonPropsType = {
    title: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled: boolean
}

export function Button(props: ButtonPropsType) {
    return (
        <>
            <button className='button'
                    onClick={props.onClick}
                    disabled={props.disabled}>{props.title}</button>
        </>
    )
}