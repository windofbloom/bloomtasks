import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext/Context";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

    return (
      <div className="TodoCounter">

        <h1 
        className="TodoCounter__title">
          With the power of the Moon
        </h1>

        <h2 className="TodoCounter__subtitle">
       You have completed <span>{completedTodos}</span> of <span>{totalTodos}</span> Tasks
      </h2>

      </div>
      
    );
  }

export { TodoCounter };