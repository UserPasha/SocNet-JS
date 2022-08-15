import React from 'react';
import c from "./FormControls.module.css"

export const TextArea = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error
    return (
        <div className={c.formControl + " " + (isError ? c.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>

            { isError  && <span>{meta.error} </span>}
        </div>

    )

}

export const Input = ({input, meta, ...props}) => {

    const isError = meta.touched && meta.error
    return (
        <div className={c.formControl + " " + (isError ? c.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>

            { isError  && <span>{meta.error} </span>}
        </div>

    )

}
