import styles from './Header.module.css'
import logo from '../assets/Logo.svg'
import {ChangeEvent, FormEvent, useState} from 'react'
import {PlusCircle} from 'phosphor-react'

interface Props{
    onAddTask:(taskTitle:string)=> void
}

export const Header = ({onAddTask}:Props) =>{
    
    const [title, setTitle] = useState("");

    const handleSubmit = (event: FormEvent) =>{
        event.preventDefault();
        onAddTask(title)
        setTitle("");
    }

    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
    }
    
    return (
        
        <header className={styles.todoHeader}>
            <img src={logo} alt="" />

            <form
             onSubmit={handleSubmit}
             
             className={styles.inputTask} action="#">
            <input required={true} value={title} onChange={onChangeTitle} 
            type="text" placeholder='Adicione uma nova tarefa' />
            <button type='submit'>Add <PlusCircle size={18}></PlusCircle> </button>
        </form>
        </header>
            
      
 
    )
}