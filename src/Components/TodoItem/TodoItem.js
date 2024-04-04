import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
    return(
      <ul className="TodoItem">
        <span className={`TodoItem__icon--check
        ${props.completed && "TodoItem__icon-check--active"}`}
        onClick={props.onComplete}
        >
          <FontAwesomeIcon icon={faCheck} /></span>
        <p className={`TodoItem__text ${props.completed && 
          "TodoItem__text--complete"} `}>{props.text}</p>
        <span className={`TodoItem__icon--close 
        TodoItem__icon--delete`}
        onClick={props.onDelete}
        >
        <FontAwesomeIcon icon={faXmark} /></span>
      </ul>
    );
  }

export { TodoItem };