import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './App.css';

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]); // Add task with initial completed as false
  };

  // Function to delete a task by index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task at index
  };

  // Function to toggle a task's completed status
  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task // Toggle the completed status of the task
      )
    );
  };

  // Function to move a task up in the list
  const moveTaskUp = (index) => {
    if (index === 0) return; // Prevent moving the first task up
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]]; // Swap task positions
    setTasks(newTasks);
  };

  // Function to move a task down in the list
  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return; // Prevent moving the last task down
    const newTasks = [...tasks];
    [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]]; // Swap task positions
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* Task input component */}
      <TaskInput onAddTask={addTask} />
      {/* Task list component */}
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
        onMoveTaskUp={moveTaskUp}
        onMoveTaskDown={moveTaskDown}
      />
    </div>
  );
}

export default App;
