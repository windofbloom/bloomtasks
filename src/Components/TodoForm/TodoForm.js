import React from "react";
import { TodoContext } from "../TodoContext/Context";
import './TodoForm.css';
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function TodoForm () {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const[newTodoValue, setNewTodoValue] = 
    React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };


    return (
        <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5, 
        ease: 'easeInOut'}}
        onSubmit={onSubmit}
          className="TodoForm">
          <label className="TodoForm-label">Add Something New ᓚ₍ ^. .^₎</label>
            <textarea value={newTodoValue}
                onChange={onChange}
                className="TodoForm-textArea"
                placeholder="Blessing of The Moon Upon Your Task"
            />
            <div className="TodoForm-buttonContainer">
                <button onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel">
                Nope!
                </button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">
                Add New Task
                </button>
            </div>
        </motion.form>
    );
}

export { TodoForm };