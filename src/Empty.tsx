import clipboard from './assets/clipboard.svg'
import styles from './Empty.module.css'
export function Empty() {

    return (
        <>
            <img src={clipboard} alt="" className={styles.clip}/>
            <p>
                Você ainda não tem tarefas cadastradas
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </>

    );
}
