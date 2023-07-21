import React from "react";

const TaskList = ({tasks}) => {
    return (
        <ul>
            {tasks.map(task => (
                <li style={{textDecoration: task.isCompleted ? "line-through" : ""}}>{task.title}</li>
            ))}
        </ul>
    )
}

export default TaskList;
