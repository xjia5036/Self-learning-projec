import React from "react";

function TaskList({ tasks, onDeleteTask, onToggleComplete, onMoveTaskUp, onMoveTaskDown }) {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {/* Checkbox to toggle completed status */}
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleComplete(index)} // Trigger toggle
              style={{ marginRight: "8px" }}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text} {/* Display task text */}
            </span>
            {/* Button to move task up */}
            <button onClick={() => onMoveTaskUp(index)} style={{ marginLeft: "8px" }}>
              ↑
            </button>
            {/* Button to move task down */}
            <button onClick={() => onMoveTaskDown(index)} style={{ marginLeft: "4px" }}>
              ↓
            </button>
            {/* Button to delete task */}
            <button onClick={() => onDeleteTask(index)} style={{ marginLeft: "8px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
