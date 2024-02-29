import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'
import { ITask } from './App'
import { ChangeEvent, InputHTMLAttributes, useState } from 'react'

export function Task({id, content}:ITask){
    const [checked, setChecked] = useState(false);

    function handleCheck(event:ChangeEvent<HTMLInputElement>){
        setChecked(event.target.checked)
    }

    return(
        <div key={id} className={styles.task}>
            <input type="checkbox" className={styles.checkbox} onChange={handleCheck}/>
            <p className={checked ? styles.checked : ''} >{content}</p>
            <button>
                <Trash size={23} className={styles.trash}/>
            </button>
      </div>
    )
}