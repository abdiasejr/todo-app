function ToDoList ({ children, error, loading, onError, searchedToDos, onLoading, onEmpty, render, onEmptySearch, totalToDos, searchValue }) {
  const renderFn = children || render

  return (
    <section className='toDoSection'>
      <ul className='toDoList'>
        {error && onError()}
        {loading && onLoading()}
        {(!loading && !totalToDos) && onEmpty()}
        {(!!totalToDos && !searchedToDos.length) && onEmptySearch(searchValue)}
        {(!loading) && searchedToDos.map(renderFn)}
      </ul>
    </section>
  )
}

export { ToDoList }
