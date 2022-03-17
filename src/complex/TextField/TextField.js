import React from "react"
import styles from "./TextField.module.scss"

const TextField = ({placeholder, value, onChenge}) => {
    return (
        <div>
            <input
                className={styles.input}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChenge(e.target.value)}
            />
        </div>
    )
}
export default TextField
