import React, {useState} from "react"
import styles from "./Retual.module.scss"

const Icon = ({data, setCircle}) => {
    const [state, setState] = useState(false)

    const onClickIcon = (id) => {
        setState(!state)
        setCircle([id])
    }
    return (
        <div
            className={state ? styles.iconActive : styles.icon}
            onClick={() => onClickIcon(data.id)}
        >
            {data.comp}
        </div>
    )
}
export default Icon
