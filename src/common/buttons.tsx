'use client'
import { CSSProperties } from "react"
import style from "./button.module.css"
import Link from "next/link"

const ButtonOne = ({ text, styleCss }: { text: string, styleCss?: CSSProperties }) => {
    return (
        <div className={style.main}>
            <button style={styleCss}>{text}</button>
        </div>
    )
}


const ButtonTwo = ({ text, styleCss, Icons, link, clickEvent }: { text: string, styleCss?: CSSProperties, Icons?: any, link?: string, clickEvent?:Function }) => {
    return (
        <div className={style.mainTwo} >
            
            {link ?
                <Link passHref href={link}><button style={styleCss} onClick={() => {clickEvent ? clickEvent() : ""}}>{text} {Icons}</button></Link>
                :
                <button onClick={() => {clickEvent ? clickEvent() : ""}} style={styleCss}>{text} {Icons}</button>
            }
        </div>
    )
}

export { ButtonOne, ButtonTwo };