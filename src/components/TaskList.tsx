import TaskItem from "./TaskItem";
import Task from "./utils";

interface Props{
    heading: string;
    done: boolean;
    tasks: Task[];
    onChangeDone: (index:number) => void;
    onRemove: (index:number) => void;
}

function TaskList({heading, done, tasks, onChangeDone, onRemove}: Props){

    return(
        <>
            <h2>{heading}</h2>
            <div className={'tasklist' + (done ? ' done' : '')}>
                {tasks.length === 0 ? 'Žádné úkoly.' : tasks.map((task, index) => (task.done == done ? <TaskItem onRemove={onRemove} onChangeDone={onChangeDone} key={index} index={index} name={task.name} deadline={task.deadline} done={done}/> : null))}
            </div>
        </>
    )
}

export default TaskList;