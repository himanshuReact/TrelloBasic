import React, { useState } from "react";
import Tasks from "./Tasks";
import "../styles.css";

const Board = () => {
  const TasksType = ["To Do", "In Progress", "Done"];
  const TList = ["DS algo", "React code", "Leet  code", "System Design"];

  const [TaskList, setTaskList] = useState(TList);

  return (
    <div className="boards__main">
      <div className="board__type">
        {TasksType.map((type) => {
          return (
            <div className="type__block">
              {type}
              <Tasks />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
