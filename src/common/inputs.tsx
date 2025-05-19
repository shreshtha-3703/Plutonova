import { HTMLInputTypeAttribute } from "react";
import style from "./input.module.css"

const InputText = ({ placeholder, value, changeValue, label,type }: { placeholder: string, value: string, changeValue: Function, label?: string,type:HTMLInputTypeAttribute }) => {
    return (
        <div className={style.mainInputOne}>
            {label ?
                <div className={style.mainInputOneLabel}>
                    <label>{label}</label>
                </div>
                : ""}
            <div className={style.mainInputOneInput}>
                <input type={type} placeholder={placeholder} value={value} onChange={(e) => {
                    changeValue(e.target.value)
                }} />
            </div>
        </div>
    )
}

const InputTextArea = ({ placeholder, value, changeValue, label }: { placeholder: string, value: string, changeValue: Function, label?: string}) => {
    return (
        <div className={style.mainTextarea}>
            {label ?
                <div className={style.mainTextareaLabel}>
                    <label>{label}</label>
                </div>
                : ""}
            <div className={style.mainTextareaInput}>
                <textarea placeholder={placeholder} value={value} onChange={(e) => {
                    changeValue(e.target.value)
                }} ></textarea>
            </div>
        </div>
    )
}

export {InputText,
    InputTextArea
};