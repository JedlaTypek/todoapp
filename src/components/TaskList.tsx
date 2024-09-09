import TaskItem from "./TaskItem";

interface Props{
    heading: string;
    done: boolean;
    tasks: [{name:string, deadline:Date, done:boolean}];
}

function TaskList({heading, done, tasks}: Props){

    return(
        <>
            <h2>{heading}</h2>
            <div className={'tasklist' + (done ? ' done' : '')}>
                {tasks.map((task, index) => (task.done == done ? <TaskItem key={index} name={task.name} deadline={task.deadline} done={done}/> : null))}
            </div>
        </>
    )
}

export default TaskList;