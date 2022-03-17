import React from "react"
import styles from "./Button.module.scss"
import {ReactComponent as Plus} from "../../assets/icons/Plus.svg"

const Button = ({title, onClick}) => {
    return (
        <div className={styles.button} onClick={onClick}>
            <div className={styles.title}>{title}</div>
            <Plus />
        </div>
    )
}
export default Button
