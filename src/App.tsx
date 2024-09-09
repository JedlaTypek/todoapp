import { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import './App.css'
import Task from './components/utils'

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    let savedValue = localStorage.getItem('tasks');
    if(savedValue === '' || savedValue === null){
      localStorage.setItem('tasks', '[]');
      savedValue = '[]';
    }
    const object = JSON.parse(savedValue);
    return object;
  });
  
  useEffect(() => {
    // Uložení dat do localStorage při každé změně
    const string = JSON.stringify(tasks)
    localStorage.setItem('tasks', string);
  }, [tasks]);

  const addTask = (task: Task) => {
    setTasks(prevTasks => [...prevTasks, task]);
  };

  const changeDone = (index: number) => {
    setTasks(prevTasks => {
      const newTasks = [...prevTasks];
      newTasks[index] = { ...newTasks[index], done: !newTasks[index].done };
      return newTasks;
    });
  };

  return (
    <>
      <h1>ToDo App</h1>
      <p>Poslední aktualizace: {(new Date).toLocaleString()}</p>
      <h2>Přidat úkol:</h2>
      <AddTask onAddTask={addTask} />
      <TaskList heading='Nehotové úkoly' done={false} tasks={tasks} onChangeDone={changeDone}/>
      <TaskList heading='Hotové úkoly' done tasks={tasks} onChangeDone={changeDone}/>
    </>
  )
}

export default App
