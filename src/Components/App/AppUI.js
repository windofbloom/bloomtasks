import "./App.css";
import React from "react";
import { TodoCounter } from '../TodoCounter/TodoCounter'
import { TodoSearch } from '../TodoSearch/TodoSearch'
import { TodoList } from '../TodoList/TodoList'
import { TodoItem } from '../TodoItem/TodoItem'
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton'
import { CreateNew } from '../CreateNew/CreateNew'
import { Credits } from '../Credits/Credits'
import { TodosLoading } from '../TodosLoading/TodosLoading'
import { TodosError } from '../TodosError/TodosError'
import { EmptyTodos } from '../EmptyTodos/EmptyTodos'
import { Modal } from "../Modal/Modal";
import { TodoForm } from "../TodoForm/TodoForm";
import { TodoContext } from "../TodoContext/Context";

function AppUI() {
    const {
      loading,
      error,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return (
      <div className='container'>
        <div className='container_left'>
          <Credits />
          <CreateNew />
          <CreateTodoButton
           setOpenModal={setOpenModal}
           />
          
          {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
          )}
        </div>
    
        <div className='container_right'>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos />}
    
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </div>
      </div>
      );
}

export { AppUI };