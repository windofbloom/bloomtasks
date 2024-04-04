import "./TodoList.css";

function TodoList(props) {
    return (
        <div className='TodoList'>
      <ul className="TodoList__items">
        {props.children}
      </ul>
        </div>
    );
  }

export { TodoList };