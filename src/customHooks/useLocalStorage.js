import { useState, useEffect } from 'react'

function useLocalStorage (itemName, initialValue) {
  const [sincronizedItem, setSincronizedItem] = useState(true)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  // Aqui usaremos el estado para observar los cambios y avisar a react de un nuevoItem
  const [item, setItem] = useState(initialValue)

  useEffect(() => {
    setTimeout(() => {
      try {
        // Buscar si el itemName está en el localStorage
        const localStorageItem = window.localStorage.getItem(itemName)
        // Servirá para parsear un string a un JSON.
        let parsedItem

        if (!localStorageItem) {
          window.localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = []
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        // Actualizar ultima data como el item actual
        setItem(parsedItem)
        setLoading(false)
        setSincronizedItem(false)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  }, [sincronizedItem])

  const saveItem = (newItem) => {
    try {
      // Pasar a string el array de items y setearlos en el localStorage
      const stringifiedItem = JSON.stringify(newItem)
      window.localStorage.setItem(itemName, stringifiedItem)
      // Cuando se llame esta función guardaremos como último estado ese item pasado
      setItem(newItem)
    } catch (error) {
      setError(error)
    }
  }

  const sincronize = () => {
    setSincronizedItem(true)
    setLoading(true)
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronize
  }
}

export { useLocalStorage }
