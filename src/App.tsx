
import { PlusCircle } from '@phosphor-icons/react'
import styles from'./App.module.css'
import { Header } from './Header'
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent,  FormEvent, useState } from 'react'
import { Task } from './Task';
import { Empty } from './Empty';
export interface ITask {
  id: string;
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

  function handleDeleteTask(id: string){
    const filter = tasks.filter(task => task.id != id);
    
    setTasks(filter);

  }
  function handleCheckTask(id: string){
    const updatedTasks = tasks.map(task => task.id === id ? {...task, isCompleted: !task.isCompleted} : task);
    setTasks(updatedTasks);
  }
  const checkCount =  tasks.filter(task => task.isCompleted === true).length;

  return (
    <main>
    <Header/>
    <section className={styles.wrapper}>
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
              <span>{checkCount} de {tasks.length}</span>
            </p>
          </header>
          <main>
           { 
             count >= 1 ? tasks.map(task => (
                <Task data={task} deleteTask={handleDeleteTask} checkTask={handleCheckTask} />
              )) : ( 
                <Empty />
                )
            
            }

          </main>
        </div>
    </section>
    </main>
  )
}

export default App
