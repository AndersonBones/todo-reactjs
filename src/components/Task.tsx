import { useState } from 'react'
import { ITask } from '../App'
import styles from './Task.module.css'
import {Circle, Trash, CheckCircle } from 'phosphor-react'


interface Task{
    task:ITask
    onCheckTask:(id:string)=>void
    onDeleteTask:(id:string)=>void
}

export const Task = (props: Task) =>{

   

    const handleDeleteTask = ()=>{
        props.onDeleteTask(props.task.id)
    }

    const handleCheckTask = ()=>{

        props.onCheckTask(props.task.id);
    }
    
    return (
        <div className={styles.task}>
            <div className={styles.taskBody}>
                <button className={styles.checkTask} onClick={handleCheckTask}> {props.task.isCompleted?<CheckCircle size={17} className={styles.checkCircle} ></CheckCircle>:  <Circle size={17}></Circle>}</button>
                <div className={styles.taskContent}>
                <p>{props.task.title}</p>
                </div>
                
                <button onClick={handleDeleteTask} className={styles.deleteTask}> <Trash ></Trash></button>
            </div>
        </div>
    )
}