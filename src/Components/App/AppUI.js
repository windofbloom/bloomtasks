import "./App.css";
import React from "react";
import { motion } from "framer-motion";
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
import { NotFoundTodos } from "../NotFoundTodos/NotFoundTodos";

function AppUI() {
    const {
      loading,
      error,
      searchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return (
      <div className='container'>
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, 
        ease: 'easeInOut'}}
        className='container_left'>
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
        </motion.div>
    
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, 
        ease: 'easeInOut'}}
        className='container_right'>
          <TodoCounter />
          <TodoSearch />

          <TodoList>
            {loading && <TodosLoading />}
            {error && <TodosError />}
            
            {!loading && searchedTodos.length === 0 && searchValue && (
              <NotFoundTodos /> )}
            {!loading && searchedTodos.length === 0 && !searchValue && <EmptyTodos />}
    
            {searchedTodos.map(todo => (
              <TodoItem key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        </motion.div>
      </div>
      );
}

export { AppUI };