import { React } from 'react'

const Task = ({task, toggleCompleteTask}) => {
    return (
        <li
            style={{textDecoration: task.isCompleted ? "line-through" : ""}}
            onClick={() => toggleCompleteTask(task.id)}
        >{task.title}</li>
    );
}

export default Task;
