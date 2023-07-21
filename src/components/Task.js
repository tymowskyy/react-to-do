import { React } from 'react'

const Task = ({task, toggleCompleteTask, deleteTask}) => {
    return (
        <li
            style={{textDecoration: task.isCompleted ? "line-through" : ""}}
        >
            {task.title}
            <button onClick={() => toggleCompleteTask(task.id)}>️⭕️</button>
            <button onClick={() => deleteTask(task.id)}>❌</button>
        </li>
    );
}

export default Task;
