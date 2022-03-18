import React, {useState} from "react"
import {ReactComponent as Profile} from "../../assets/icons/Nav Item/profile.svg"
import {ReactComponent as Calendar} from "../../assets/icons/Nav Item/calendar.svg"
import {ReactComponent as Diari} from "../../assets/icons/Nav Item/diary.svg"

import styles from "./Footer.module.scss"

const Icons = [
    {
        id: 1,
        comp: <Diari />,
        title: "Записи",
    },
    {
        id: 2,
        comp: <Calendar />,
        title: "Календарь",
    },
    {
        id: 3,
        comp: <Profile />,
        title: "Профиль",
    },
]

const Footer = () => {
    const [state, setState] = useState()
    return (
        <div className={styles.block}>
            {Icons.map((item) => (
                <div
                    className={
                        state === item.id
                            ? styles.blockItemActive
                            : styles.blockItem
                    }
                    key={item.id}
                    onClick={() => setState(item.id)}
                >
                    <div>{item.comp}</div>
                    <div>{item.title}</div>
                </div>
            ))}
        </div>
    )
}

export default Footer
