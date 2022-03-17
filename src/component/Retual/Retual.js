import React, {useState} from "react"
import {ReactComponent as Config} from "../../assets/icons/config_icon.svg"
import {ReactComponent as Lapa} from "../../assets/icons/rituals.svg"
import {ReactComponent as People} from "../../assets/icons/icons rituals.svg"
import {ReactComponent as Mute} from "../../assets/icons/icons rituals-1.svg"
import {ReactComponent as Tablet} from "../../assets/icons/icons rituals-2.svg"
import {ReactComponent as Palitr} from "../../assets/icons/icons rituals-3.svg"
import {ReactComponent as Musik} from "../../assets/icons/icons rituals-4.svg"
import {ReactComponent as Plus} from "../../assets/icons/icons rituals-5.svg"
import {ReactComponent as Cirkle} from "../../assets/icons/Cirkul.svg"
import {ReactComponent as CirkleY} from "../../assets/icons/circle.svg"

import styles from "./Retual.module.scss"
import Icon from "./Icon"

const Icons = [
    {
        id: 1,
        comp: <Lapa />,
    },
    {
        id: 2,
        comp: <People />,
    },
    {
        id: 3,
        comp: <Mute />,
    },
    {
        id: 4,
        comp: <Tablet />,
    },
    {
        id: 5,
        comp: <Palitr />,
    },
    {
        id: 6,
        comp: <Musik />,
    },
    {
        id: 7,
        comp: <Plus />,
    },
]

const Retual = () => {
    const [circle, setCircle] = useState()

    return (
        <div className={styles.wrapper}>
            <div className={styles.leftMenu}>
                <div className={styles.Cirkle}>
                    {circle ? <CirkleY /> : <Cirkle />}
                </div>
                <div className={styles.line}></div>
            </div>

            <div className={styles.block}>
                <div className={styles.blockTitle}>
                    <div>Вечерние ритуалы</div>
                    <div>
                        <Config />
                    </div>
                </div>
                <div className={styles.blockIcon}>
                    {Icons.map((icon) => {
                        return (
                            <Icon
                                data={icon}
                                key={icon.id}
                                setCircle={setCircle}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Retual
