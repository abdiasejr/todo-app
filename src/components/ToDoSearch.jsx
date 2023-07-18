import { BiSearch } from 'react-icons/bi'

function ToDoSearch ({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div
      className={`toDoSearchContainer ${!!loading && 'toDoSearchDisabled'}`}
    >
      <input
        className='toDoSearch'
        placeholder='Cook dinner...'
        value={searchValue}
        onChange={onSearchValueChange}
        disabled={loading}
      />
      <BiSearch className='toDoSearchIcon' />
    </div>
  )
};

export { ToDoSearch }
