import { useState } from 'react';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Task from "./utils"

interface Props{
    onAddTask: (task: Task) => void;
}

const AddTask = ( { onAddTask }:Props ) => {
    const [taskText, setTaskText] = useState('');
    const [deadline, setDeadline] = useState<string>('');
  
    const handleAddTask = () => {
        if (taskText.trim() !== '') {
          const newTask: Task = {
            name: taskText,
            deadline: deadline === '' ? new Date(new Date().getTime() + 24*60*60*1000) : new Date(deadline),
            done: false
          };
          onAddTask(newTask);
          setTaskText('');
          setDeadline('');
        }
      };
    
      return (
        <div className="addTask">
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter task"
          />
          <input
            type="datetime-local"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="sendBtn"
            onClick={handleAddTask}
          />
        </div>
      );
    };

export default AddTask