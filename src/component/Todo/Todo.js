import React, {useState} from "react"
import styles from "./Todo.module.scss"
import {ReactComponent as Info} from "../../assets/icons/info.svg"
import {ReactComponent as Delet} from "../../assets/icons/delete.svg"
import Button from "../../complex/Button/Button"
import TextField from "../../complex/TextField/TextField"
import {ReactComponent as Cirkle} from "../../assets/icons/Cirkul.svg"
import {ReactComponent as CirkleY} from "../../assets/icons/circle.svg"

const Todo = ({title, titleButton, titleInput}) => {
    const [value, setValue] = useState("")
    const [list, setList] = useState([])

    const onClickAdd = () => {
        if (value.length > 0) {
            setList([...list, value])
        }
        setValue("")
    }

    const onClickDelet = (id) => {
        const newList = list.filter((_, idx) => idx !== id)
        setList(newList)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftMenu}>
                <div className={styles.Cirkle}>
                    {list.length !== 0 ? <CirkleY /> : <Cirkle />}
                </div>
                <div className={styles.line}></div>
            </div>
            <div className={styles.block}>
                <div className={styles.title}>
                    <div className={styles.textTitle}>{title}</div>
                    <Info />
                </div>
                <div className={styles.itemBlock}>
                    {list !== []
                        ? list.map((item, idx) => (
                              <div className={styles.item} key={idx}>
                                  <div>{item}</div>
                                  <div
                                      className={styles.buttonDelete}
                                      onClick={() => onClickDelet(idx)}
                                  >
                                      <Delet />
                                  </div>
                              </div>
                          ))
                        : null}
                </div>

                <div className={styles.blockInBut}>
                    <TextField
                        placeholder={titleInput}
                        value={value}
                        onChenge={setValue}
                    />
                    <Button title={titleButton} onClick={onClickAdd} />
                </div>
            </div>
        </div>
    )
}
export default Todo
