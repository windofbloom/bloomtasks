import "./TodoItem.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

const variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8
    }
  }
}

function TodoItem(props) {
    return(
      <motion.ul 
        initial='hidden'
        animate='visible'
        variants={variants}
        className="TodoItem">
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
      </motion.ul>
    );
  }

export { TodoItem };