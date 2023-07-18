import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

// Proveedor de las props de nuestro proyecto..
function useToDos () {
  const {
    item: toDos,
    saveItem: saveToDos, // Para actualizar en caso de exista nuevos toDos en el localStorage
    loading,
    error,
    sincronize
  } = useLocalStorage('TODOS_V1', []) // Para guardar en el localStorage con un key, los datos que queremos guardar en un primera estancia, esta vacio..

  // Variables "escuchar" y avisar a react cuando nuestros datos hayan cambiado
  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState(false)
  // Variable para guardar los ToDo "hechos", y el total de ToDos
  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length
  const totalToDos = toDos.length
  // Nos servirá para guardar los toDo buscados
  let searchedToDos = []

  if (!searchValue.length >= 1) {
    searchedToDos = toDos
  } else {
    searchedToDos = toDos.filter((toDo) => {
      const toDoText = toDo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return toDoText.includes(searchText)
    })
  }

  const addToDo = (text) => {
    const newTodos = [...toDos]
    newTodos.push({
      completed: false,
      text
    })
    saveToDos(newTodos)
  }

  const toggleCompleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text)
    const newToDos = [...toDos]
    newToDos[toDoIndex].completed = !toDos[toDoIndex].completed
    saveToDos(newToDos)
  }

  const deleteToDo = (text) => {
    const toDoIndex = toDos.findIndex((toDo) => toDo.text === text)
    const newTodos = [...toDos]
    newTodos.splice(toDoIndex, 1)
    saveToDos(newTodos)
  }

  window.addEventListener('storage', sincronize)

  return ({
    error,
    loading,
    completedToDos,
    totalToDos,
    searchValue,
    setSearchValue,
    searchedToDos,
    addToDo,
    toggleCompleteToDo,
    deleteToDo,
    openModal,
    setOpenModal
  })
}

export { useToDos }
