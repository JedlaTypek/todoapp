import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  let tasks = [
    {
        name: 'test',
        deadline: new Date(2024, 8, 11, 20, 0, 0),
        done: true
    },
    {
        name: 'test 2',
        deadline: new Date(2024, 8, 11, 19, 0, 0),
        done: false
    }
  ]
  return (
    <>
      <h1>ToDo App</h1>
      <TaskList heading='Nehotové úkoly' done={false} tasks={tasks}/>
      <TaskList heading='Hotové úkoly' done tasks={tasks}/>
    </>
  )
}

export default App
