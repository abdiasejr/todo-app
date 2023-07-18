import { useState } from 'react'

function ToDoForm ({ addToDo, setOpenModal }) {
  const [newToDoValue, setNewToDoValue] = useState('')

  const onChange = (event) => {
    setNewToDoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(prevState => !prevState)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    const flag = newToDoValue.split(' ').every(word => word.length < 30)
    if (newToDoValue && flag) addToDo(newToDoValue)
    setOpenModal(prevState => !prevState)
  }

  return (
    <div className='toDoFormContainer'>
      <form className='toDoForm' onSubmit={onSubmit}>
        <label className='toDoLabel'> Create a new ToDo </label>
        <textarea
          className='toDoTextArea'
          value={newToDoValue}
          onChange={onChange}
          placeholder='Cut onions for lunch..'
        />
        <div className='toDoButtoms'>
          <button
            className='toDoBtn toDoCancel'
            type='button'
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className='toDoBtn toDoSubmit'
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export { ToDoForm }
