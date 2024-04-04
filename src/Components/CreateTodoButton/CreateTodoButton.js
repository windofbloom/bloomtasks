import "./CreateTodoButton.css";

function CreateTodoButton( {setOpenModal} ) {
        return (
            <div className="createTodo_container">
                <button className="createTodo__button"
                onClick={
                    ()=>{
                        setOpenModal(state => !state);
                    }
                }
            >New Task</button>
            </div>
        )

}

export { CreateTodoButton };