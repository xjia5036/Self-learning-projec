import './App.css';
import React, { useState } from "react";

// TaskInput Component
function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Add your task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={() => { 
        if (taskText.trim()) {
          onAddTask(taskText.trim());
          setTaskText('');
        }
      }}>ADD +</button>
    </div>
  );
}

// TaskList Component
function TaskList({ tasks, onDeleteTask, onToggleComplete, onMoveUp, onMoveDown }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div className="task-item" key={index}>
          <div className="left-section">
            {/* Custom Circular Checkbox */}
            <div
              className={`checkbox ${task.completed ? 'checked' : ''}`}
              onClick={() => onToggleComplete(index)}
            />
            {/* Task Text - Add completed class if task is completed */}
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
          </div>
          <div className="right-section">
            {/* Up Arrow Button */}
            <button className="button up-btn" onClick={() => onMoveUp(index)} />
            {/* Down Arrow Button */}
            <button className="button down-btn" onClick={() => onMoveDown(index)} />
            {/* Delete Button */}
            <button className="button delete-btn" onClick={() => onDeleteTask(index)} />
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const newTasks = [...tasks];
    [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
    setTasks(newTasks);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const newTasks = [...tasks];
    [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={deleteTask}
        onToggleComplete={toggleComplete}
        onMoveUp={moveTaskUp}
        onMoveDown={moveTaskDown}
      />
    </div>
  );
}

export default App;
