function ToDoCounter ({ completedToDos, totalToDos, loading }) {
  return (
    <div>
      <h1 className={`toDoTitle ${loading && 'toDoTitleLoading'}`}> TODOs </h1>
      <h2 className={`toDoCount ${loading && 'toDoCountLoading'}`}>
        You has completed {(loading && '. . .') || completedToDos} of {totalToDos || '. . .'} tasks
      </h2>
    </div>
  )
}

export { ToDoCounter }
