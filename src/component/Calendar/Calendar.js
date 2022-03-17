import React, {useState} from "react"
import styles from "./Calendar.module.scss"
import {ReactComponent as Arrow} from "../../assets/icons/arrow icon.svg"
import {ReactComponent as Smile} from "../../assets/icons/smile.svg"
import {ReactComponent as Bookmark} from "../../assets/icons/bookmark.svg"

const Data = [
    {day: 1, week: "Пн"},
    {day: 2, week: "Вт"},
    {day: 3, week: "Cр"},
    {day: 4, week: "Чт"},
    {day: 5, week: "Пт"},
    {day: 6, week: "Сб"},
    {day: 7, week: "Вс"},
    {day: 8, week: "Пн"},
    {day: 9, week: "Вт"},
    {day: 10, week: "Ср"},
    {day: 11, week: "Чт"},
    {day: 12, week: "Пт"},
    {day: 13, week: "Сб"},
    {day: 14, week: "Вс"},
    {day: 15, week: "Пн"},
    {day: 16, week: "Вт"},
    {day: 17, week: "Ср"},
    {day: 18, week: "Чт"},
    {day: 19, week: "Пт"},
    {day: 20, week: "Сб"},
    {day: 21, week: "Вс"},
    {day: 22, week: "Пн"},
    {day: 23, week: "Вт"},
    {day: 24, week: "Ср"},
    {day: 25, week: "Чт"},
    {day: 26, week: "Пт"},
    {day: 27, week: "Сб"},
    {day: 28, week: "Вс"},
    {day: 29, week: "Пн"},
    {day: 30, week: "Вт"},
    {day: 31, week: "Ср"},
]

const Calendar = () => {
    const [offset, setOffset] = useState(275)
    console.log(offset)

    // const onClickData = (id) => {
    //     setOffset(() => {
    //         const leftItem = offset - 58

    //         return leftItem
    //     })
    // }

    const onClickLeft = () => {
        console.log("left")
        if (offset >= 275) {
            return
        } else {
            setOffset(() => {
                const leftItem = offset + 58

                return leftItem
            })
        }
    }
    const onClickRight = () => {
        console.log("right")
        if (offset <= -1465) {
            return
        } else {
            setOffset(() => {
                const leftItem = offset - 58

                return leftItem
            })
        }
    }

    const tt = Data.map((item) => {
        return (
            <div className={styles.blockData} key={item.day}>
                <span className={styles.calendarBlockDate}>{item.week}</span>
                <span className={styles.calendarBlockNumber}>{item.day}</span>
            </div>
        )
    })

    return (
        <div className={styles.block}>
            <div className={styles.title}>
                Сегодня, 10 Февраля <Arrow />
            </div>
            <div className={styles.calendar}>
                <div className={styles.calendarBlock}>
                    <div className={styles.icon}>
                        <Smile />
                        <Bookmark />
                    </div>
                </div>
                <div className={styles.buttonLeft} onClick={onClickLeft}></div>
                <div
                    className={styles.buttonRight}
                    onClick={onClickRight}
                ></div>

                <div className={styles.blockdata} style={{left: `${offset}px`}}>
                    {tt}
                </div>
            </div>
        </div>
    )
}
export default Calendar
