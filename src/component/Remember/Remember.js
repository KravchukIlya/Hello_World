import React, {useState} from "react"

import styles from "./Remember.module.scss"
import {ReactComponent as Swith} from "../../assets/icons/Switch.svg"
import {ReactComponent as Cirkle} from "../../assets/icons/Cirkul.svg"

const Remember = () => {
    const [state, setState] = useState(false)
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftMenu}></div>
            <div className={styles.block}>
                <div className={styles.title}>Запомнить день</div>

                <label className={styles.switch}>
                    <input type='checkbox' />
                    <span className={styles.slider}></span>
                </label>
            </div>
        </div>
    )
}

export default Remember
