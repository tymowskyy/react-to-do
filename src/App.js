import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {id: 0, title: "Mleko", isCompleted: true},
    {id: 1, title: "Parówki", isCompleted: false},
    {id: 2, title: "Chleb", isCompleted: false},
  ]);

  const toggleCompleteTask = id => {
    setTasks(tasks.map(task => {
      if (task.id === id)
        task.isCompleted = !task.isCompleted;
      return task;
    }));
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <TaskList tasks={tasks} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} />
  );
}

export default App;
