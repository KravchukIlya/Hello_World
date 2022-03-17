import React, {useState} from "react"
import styles from "./Tasks.module.scss"
import {ReactComponent as Day} from "../../assets/icons/day head.svg"
import {ReactComponent as Arrow} from "../../assets/icons/Line.svg"

const DayTime = [
    {
        id: 1,
        title: "Утро",
    },
    {
        id: 2,
        title: "Вечер",
    },
]
const Tasks = () => {
    const [state, setState] = useState()
    return (
        <div className={styles.block}>
            <div className={styles.blockTasks}>
                <div className={styles.blockText}>
                    <span className={styles.title}>Задание недели</span>
                    <span className={styles.text}>
                        Каждый день делать себя лучше. Не торопитесь, делайте
                        немного каждый день.
                    </span>
                </div>
                <div>
                    <Arrow />
                </div>
            </div>
            <Day />
            <div className={styles.blockDay}>
                {DayTime.map((item, idx) => (
                    <div
                        className={
                            state === idx ? styles.morningActiv : styles.morning
                        }
                        key={idx}
                        onClick={() => setState(idx)}
                    >
                        {item.title}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Tasks
