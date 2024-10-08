import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


interface Props{
    name: string;
    deadline?: Date;
    done: boolean;
    index: number;
    onChangeDone: (index:number) => void;
    onRemove: (index:number) => void;
}

function TaskItem({name, deadline, done, index, onChangeDone, onRemove}:Props){
    let deadlineText:string = "";
    let remainingTime = 24*60*60*1000+1;
    if (deadline != ''){
        const deadlineDate = new Date(deadline);
        deadlineText = deadlineDate.getDate().toString() + '. ' + (deadlineDate.getMonth()+1).toString() + '. ' + deadlineDate.getFullYear() + ' ' + deadlineDate.getHours().toString() + ':' + deadlineDate.getMinutes().toString().padStart(2, '0');
        const now = new Date().getTime();
        remainingTime = deadlineDate.getTime() - now;
    }

    const handleChangeDone = () => {
        onChangeDone(index);
    }

    const handleRemove = () => {
        onRemove(index);
    }

    return (
        <div className="task">
            {done ? <FontAwesomeIcon icon={faCircleXmark} className='trash' onClick={handleChangeDone}/> : <FontAwesomeIcon icon={faCircleCheck} className='check' onClick={handleChangeDone}/>}
            <div className={'taskItemContent' + (remainingTime < 0 && !done ? ' missed' : (remainingTime < 24*60*60*1000 && !done ? ' dayLeft' : ''))}>
                <h3 className="name">{name}</h3>
                {deadline && <p className="deadline">{deadlineText}</p>}
            </div>
            <FontAwesomeIcon icon={faTrash} className='trash' onClick={handleRemove}/>
        </div>
    )
}

export default TaskItem