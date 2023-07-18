import { FaCheckSquare, FaTrashAlt } from 'react-icons/fa'

function ToDoItem ({ completed, text, onComplete, onDelete }) {
  return (
    <li className='toDoItem'>
      <FaCheckSquare
        className={`toDoCheckBox ${completed && 'toDoCheck'}`}
        onClick={onComplete}
      />
      <p className={`toDo ${completed && 'toDoCompleted'}`}> {text} </p>
      <FaTrashAlt
        className='toDoDelete'
        onClick={onDelete}
      />
    </li>
  )
};

export { ToDoItem }
