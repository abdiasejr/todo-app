function CreateToDoButtom ({ openModal, setOpenModal }) {
  return (
    <button
      className='createToDo'
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  )
}

export { CreateToDoButtom }
