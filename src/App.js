import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {id: 0, title: "Mleko", isCompleted: true},
    {id: 1, title: "Parówki", isCompleted: false},
    {id: 2, title: "Chleb", isCompleted: false},
  ]);
  return (
    <TaskList tasks={tasks} />
  );
}

export default App;
