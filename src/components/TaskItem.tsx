import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'


interface Props{
    name: string;
    deadline: Date;
    done: boolean;
}

function TaskItem({name, deadline, done}:Props){
    let deadlineText:string = deadline.getDate().toString() + '. ' + (deadline.getMonth()+1).toString() + '. ' + deadline.getHours().toString() + ':' + deadline.getMinutes().toString().padStart(2, '0');
    const now = new Date().getTime();
    let remainingTime = deadline.getTime() - now;
    return (
        <div className="task">
            {done ? <FontAwesomeIcon icon={faCircleXmark} className='trash'/> : <FontAwesomeIcon icon={faCircleCheck} className='check'/>}
            <div className={'taskItemContent' + (remainingTime < 0 && !done ? ' missed' : (remainingTime < 24*60*60*1000 && !done ? ' dayLeft' : ''))}>
                <h3 className="name">{name}</h3>
                <p className="deadline">{deadlineText}</p>
            </div>
            <FontAwesomeIcon icon={faEdit} />
            <FontAwesomeIcon icon={faTrash} className='trash'/>
        </div>
    )
}

export default TaskItem