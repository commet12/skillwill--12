import React, { useState } from "react";
import "./App.css";

function App() {
  
  const [axali, dasamatebeli] = useState([]);
  const [dasrulebuli, saboloo] = useState([]);

  const addTask = (event) => {
    event.preventDefault();
    const newTask = event.target.task.value;
    dasamatebeli([...axali, newTask]);
    event.target.task.value = "";
  };

  const completeTask = (index) => {
    const task = axali[index];
    saboloo([...dasrulebuli, task]);
    dasamatebeli([...axali.slice(0, index), ...axali.slice(index + 1)]);
  };

  const deleteTask = (index, isCompleted) => {
    if (isCompleted) {
      saboloo([...dasrulebuli.slice(0, index), ...dasrulebuli.slice(index + 1)]);
    } else {
      dasamatebeli([...axali.slice(0, index), ...axali.slice(index + 1)]);
    }
  };

  const moveit = (index) => {
    const task = dasrulebuli[index];
    dasamatebeli([...axali, task]);
    saboloo([...dasrulebuli.slice(0, index), ...dasrulebuli.slice(index + 1)]);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input type="text" name="task" placeholder="Add Task" />
        <button type="submit">Add</button>
      </form>
      <div className="task-list">
        <h2>To-Do</h2>
        <ul>
          {axali.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => completeTask(index)}>Finish</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="task-list">
        <h2>Completed</h2>
        <ul>
          {dasrulebuli.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index, true)}>Delete</button>
              <button onClick={() => moveit(index)}>Move to To-Do</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

