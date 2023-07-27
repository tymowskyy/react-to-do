import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import Form from "./components/Form";

function App() {
  
  const [tasks, setTasks] = useState(() => {
    let localTasks = localStorage.getItem('tasks');
    return localTasks ? JSON.parse(localTasks) : [];
  });
  const [filter, setFilter] = useState(() => {
    let localFilter = localStorage.getItem('filter');
    return localFilter ? JSON.parse(localFilter) : [];
  });

  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filter));
  }, [filter]);

  useEffect(() => {
    if (filter === 'all')
      setFilteredTasks(tasks);
    else
      setFilteredTasks(tasks.filter(
        task => task.isCompleted === (filter === 'completed')
      ));
  }, [tasks, filter]);

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

  const addTask = title => {
    setTasks(tasks.concat([{
      id: Math.floor(Math.random()*10000),
      title: title,
      isCompleted: false
    }]));
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
    <Form addTask={addTask} filter={filter} setFilter={setFilter}></Form>
    <TaskList tasks={filteredTasks} toggleCompleteTask={toggleCompleteTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
