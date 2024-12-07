import React from "react";

function Task({ task, onDeleteTask, onToggleComplete }) {
  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
        onClick={onToggleComplete}
      >
        {task.text}
      </span>
      <button onClick={onDeleteTask}>Delete</button>
    </li>
  );
}

export default Task;
