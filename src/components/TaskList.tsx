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
    const sortedTasks = tasks.sort((a, b) => {
        // Pokud oba úkoly nemají deadline, považujeme je za rovné
        if (a.deadline == '' && b.deadline == '') return 0;
        
        // Pokud jeden úkol nemá deadline, bude na konci
        if (a.deadline == '') return 1;
        if (b.deadline == '') return -1;
        
        // Porovnání deadlinů, pokud oba úkoly mají deadline
        return (a.deadline.getTime() - b.deadline.getTime());
      });
    return(
        <>
            <h2>{heading}</h2>
            <div className={'tasklist' + (done ? ' done' : '')}>
                {sortedTasks.length === 0 ? 'Žádné úkoly.' : sortedTasks.map((task, index) => (task.done == done ? <TaskItem onRemove={onRemove} onChangeDone={onChangeDone} key={index} index={index} name={task.name} deadline={task.deadline} done={done}/> : null))}
            </div>
        </>
    )
}

export default TaskList;