
import { PlusCircle, ClipboardText, Trash, TagChevron } from '@phosphor-icons/react'
import styles from'./App.module.css'
import { Header } from './Header'
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent,  FormEvent, useState } from 'react'
import { Task } from './Task';

export interface ITask {
  id:string;
  content: string;
  isCompleted?: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState('');
  const count = tasks.length;
  function handleCreateTask(event:FormEvent){
    event.preventDefault();
    setTasks([...tasks, {id: uuidv4(), content: newTask, isCompleted: false}]);
  }
  function handleChangeNewTask(event: ChangeEvent<HTMLInputElement>){
    setNewTask(event.target.value)
  }

  return (
    <>
    <Header/>
    <div className={styles.wrapper}>
        <form onSubmit={handleCreateTask}>
            <input type="text" placeholder='Adicione uma nova tarefa' onChange={handleChangeNewTask}/>
            <button type='submit' >Criar<PlusCircle size={20}/> </button>
        </form>
        <div className={styles.containerTask}>
          <header>
            <p>
              Tarefas Criadas
              <span>{tasks.length}</span>
            </p>
            <p>
              Concluídas
              <span>0</span>
            </p>
          </header>
          <main>
           { 
             count >= 1 ? tasks.map(task => (
                <Task id={task.id} content={task.content}/>
              )) : ( <>
                <ClipboardText size={60} />
                <p>
                  Você ainda não tem tarefas cadastradas
                </p>
                <p>Crie tarefas e organize seus itens a fazer</p> 
                </>
                )
            
            }

          </main>
        </div>
    </div>
    
    </>
  )
}

export default App
