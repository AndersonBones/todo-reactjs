import styles from './TaskList.module.css'
import { useState } from 'react'
import { Task } from './Task'
import { ITask } from '../App'


interface Props{
    tasks:ITask[]
    checkTask:(id:string)=>void
    deleteTask:(id:string)=>void
}

export const TaskList = ({tasks, deleteTask, checkTask}:Props) =>{

    const tasksLength = tasks.length;
    const completedTasks = tasks.filter(task=>{
        return task.isCompleted == true;
    }).length

   
   

    return(
        <div className={styles.taskList}>
            <header className={styles.headerTaskList}>
                <p>Tarefas criadas <span>{tasksLength}</span></p>
                <p>Concluídas <span>{completedTasks} de {tasksLength}</span></p>
            </header>

            {tasks.map(task=>{
                return(
                    <Task onCheckTask={checkTask} onDeleteTask={deleteTask} key={task.id} task={task}></Task>
                )
            })}
        </div>
    )
}