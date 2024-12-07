import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [inputValue, setInputValue] = useState(""); // Local state for the text input

  const handleAdd = () => {
    if (inputValue.trim() !== "") { // Ensure input isn't empty
      onAddTask(inputValue); // Call the parent function to add a task
      setInputValue(""); // Clear the input field after submission
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Input field for entering tasks */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update local state as user types
        style={{ marginRight: "8px" }}
      />
      {/* Button to add task */}
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
