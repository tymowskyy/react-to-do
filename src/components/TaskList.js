import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, toggleCompleteTask, deleteTask }) => (
  <ul className="w-4/12 mt-6 bg-background-light border-2 border-primary rounded-md shadow-md
  p-4 list-none space-y-3">
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

export default TaskList;
