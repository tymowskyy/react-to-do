import { React } from 'react'
import { BiCheck, BiTrash } from 'react-icons/bi'

const Task = ({ task, toggleCompleteTask, deleteTask }) => (
  <li
    className={`flex items-center justify-between ${task.isCompleted ? "line-through" : ""}`}
  >
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => toggleCompleteTask(task.id)}
          className="hidden"
        />
        <div className="w-7 h-7 border border-primary rounded-md flex items-center justify-center">
          {task.isCompleted && (
            <BiCheck className="text-accent w-6 h-6" />
          )}
        </div>
      </div>
      <span className="ml-2">{task.title}</span>
    </label>
    <BiTrash className="w-6 h-6 text-red-600 hover:text-red-800 cursor-pointer" onClick={() => deleteTask(task.id)}/>
  </li>
)

export default Task;
