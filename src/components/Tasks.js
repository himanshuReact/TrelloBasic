import React, { useEffect, useState } from "react";
import "../styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";

const Tasks = ({}) => {
  const [tasks, setTasks] = useState([]);
  const [addTask, setAddTask] = useState(false);
  const handleTask = () => {
    console.log("add task is clicked");
    setAddTask(true);
  };

  const handleCancel = () => {
    console.log("add task is clicked");
    // setTasks([]);
    setAddTask(false);
  };

  const handleInput = (e) => {
    console.log("Tasks is entered", e.target.value);
    console.log(e.key);
    // if (e.key == "Enter") {
    if (e.keyCode === 13 && e.target.value !== "") {
      console.log("task added");
      setTasks([...tasks, e.target.value]);
      e.target.value = "";
    }
    console.log("Tasks", tasks);
  };

  const deleteTask = (task) => {
    console.log("task is deleted");
    const id = tasks.indexOf(task);
    console.log("task", task);
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks([...newTasks]);
  };

  return (
    <div>
      <button onClick={handleTask} className="button">
        Add Task
      </button>
      <button onClick={handleCancel} className="button">
        Cancel
      </button>
      <div>
        {/* <i className="fa fa-folder folder-icon" /> */}
        <i className="fas fa-window-close">Test</i>
      </div>
      {addTask && <input autoFocus onKeyDown={handleInput} type="text" />}
      {/* {tasks.map(())} */}
      {tasks.length > 0 &&
        tasks.map((task) => {
          return (
            <div className="task__card">
              <div>{task}</div>
              <button onClick={() => deleteTask(task)}> delete</button>
            </div>
          );
        })}
    </div>
  );
};

export default Tasks;
