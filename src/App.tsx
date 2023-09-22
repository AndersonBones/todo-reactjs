import { useState, useEffect } from 'react'
import { Header } from './components/Header'
import { TaskList } from './components/TasksList'

import './App.module.css'


export interface ITask{ // Interface para task
  id: string
  title:string
  isCompleted:boolean
}

const LOCAL_STORAGE_KEY = "todo:savedTasks";

function App() {
  
  const [tasks, setTasks] = useState<ITask[]>([]); // declaração do state tasks
  
  function loadSavedTasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }
 
  const addTask = (taskTitle:string) =>{ // atualiza o estate tasks
      
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
      
  }

  const deleteTask = (id:string)=>{
        
    let newTaskList = tasks.filter(task=>{
        return task.id != id;
    })
    setTasksAndSave(newTaskList);
      
    
  }
  
  
    

  const checkTask = (id:string) =>{
    let newTaskList = [...tasks]

    newTaskList.map(item=>{
      if(item.id == id && item.isCompleted == false){
        item.isCompleted = true
      }
      else if(item.id == id && item.isCompleted == true){
        item.isCompleted = false
      }
    })

    setTasksAndSave(newTaskList)

  }

  const sizeTasks = tasks.length > 0;

  return (
    <>
      <Header onAddTask={addTask}></Header>
      <TaskList tasks={tasks} checkTask={checkTask} deleteTask={deleteTask}/>

    </>
  )
}

export default App
