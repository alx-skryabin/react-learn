import React, {useEffect} from 'react'
import TodoList from './Todo/TodoList'
import Loader from './Loader'
import Modal from './Modal/Modal'
import Context from './context'

// отложенная загрузка компонента, для оптимизации
// производительности приложения при больших компонентах
const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodo'))
  }, 3000)
}))


function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setTodos(todos)
          setLoading(false)
        }, 2000)
      })
  }, [])

  function toggleTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter(todo => {
      if (todo.id !== id) {
        return todo
      }
    })

    setTodos(updatedTodos)
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      id: Date.now(),
      title,
      completed: false
    }]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>
        <Modal/>

        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo}/>
        </React.Suspense>

        {loading && <Loader/>}
        {
          todos.length
            ? <TodoList todos={todos} onToggle={toggleTodo}/>
            : loading ? null : <p>No todos...</p>
        }

      </div>
    </Context.Provider>
  )
}

export default App
