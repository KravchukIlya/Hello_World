import Calendar from "../component/Calendar/Calendar"
import Mood from "../component/Mood/Mood"
import Remember from "../component/Remember/Remember"
import Retual from "../component/Retual/Retual"
import Tasks from "../component/Tasks/Tasks"
import Todo from "../component/Todo/Todo"
import styles from "./App.module.scss"

function App() {
    return (
        <div className={styles.block}>
            <Calendar />
            <Tasks />

            <Retual />
            <Todo
                title={"Что я могу сделать завтра лучше?"}
                titleButton={"Добавить"}
                titleInput={"Я могу..."}
            />
            <Todo
                title={"Прекрасные события, которые произошли со мной сегодня"}
                titleButton={"Добавить"}
                titleInput={
                    "Самое прекрасное событие произошло со мной сегодня"
                }
            />
            <Mood />
            <Remember />
        </div>
    )
}

export default App
