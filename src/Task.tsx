import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { ITask } from './App'

interface Props {
    data: ITask,
    deleteTask: (id: string) => void,
    checkTask: (id: string) => void
}
export function Task({data, deleteTask, checkTask}:Props){
    console.log(data)
    function handleCheck(){
        checkTask(data.id);
    }

    function handleDeleteTask(){
        deleteTask(data.id);
    }

    return(
        <div key={data.id} className={`${styles.task} ${data.isCompleted ? styles.checked : ''}`} >
            <input type="checkbox" className={styles.checkbox} onChange={handleCheck}/>
            <p className={data.isCompleted ? styles.checked : ''} >{data.content}</p>
            <button onClick={handleDeleteTask}>
                <Trash size={23} className={styles.trash}/>
            </button>
      </div>
    )
}