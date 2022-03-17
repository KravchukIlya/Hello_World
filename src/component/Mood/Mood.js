import React, {useState} from "react"
import styles from "./Mood.module.scss"
import {ReactComponent as Moode1} from "../../assets/icons/mood icons-1.svg"
import {ReactComponent as Moode2} from "../../assets/icons/mood icons-2.svg"
import {ReactComponent as Moode3} from "../../assets/icons/mood icons-3.svg"
import {ReactComponent as Moode4} from "../../assets/icons/mood icons-4.svg"
import {ReactComponent as Moode5} from "../../assets/icons/mood icons.svg"
import {ReactComponent as Cirkle} from "../../assets/icons/Cirkul.svg"
import {ReactComponent as CirkleY} from "../../assets/icons/circle.svg"

const Icons = [
    {
        id: 1,
        comp: <Moode5 />,
    },
    {
        id: 2,
        comp: <Moode1 />,
    },
    {
        id: 3,
        comp: <Moode2 />,
    },
    {
        id: 4,
        comp: <Moode3 />,
    },
    {
        id: 5,
        comp: <Moode4 />,
    },
]
const Mood = () => {
    const [state, setState] = useState()

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftMenu}>
                <div className={styles.Cirkle}>
                    {state !== undefined ? <CirkleY /> : <Cirkle />}
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.block}>
                <div className={styles.title}>Моё настроение</div>
                <div className={styles.blockIcon}>
                    {Icons.map((item, idx) => (
                        <div
                            key={idx}
                            className={
                                state === idx ? styles.iconActiv : styles.icon
                            }
                            onClick={() => setState(idx)}
                        >
                            {item.comp}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Mood
