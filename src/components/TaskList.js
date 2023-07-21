import React from "react";
import Task from "./Task";

const TaskList = ({tasks, toggleCompleteTask, deleteTask}) => {
    return (
        <ul>
            {tasks.map(task => 
                <Task
                    key={task.id}
                    task={task}
                    toggleCompleteTask={toggleCompleteTask}
                    deleteTask={deleteTask}
                />)
            }
        </ul>
    );
}

export default TaskList;
