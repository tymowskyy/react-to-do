import React from "react";
import Task from "./Task";

const TaskList = ({tasks, toggleCompleteTask}) => {
    return (
        <ul>
            {tasks.map(task => <Task task={task} toggleCompleteTask={toggleCompleteTask} />)}
        </ul>
    );
}

export default TaskList;
