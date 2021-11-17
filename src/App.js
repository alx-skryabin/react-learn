import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'


function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, title: 'Mercedes', completed: false},
    {id: 2, title: 'BMW', completed: true},
    {id: 3, title: 'AUDI', completed: true}
  ])

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

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>

        <TodoList todos={todos} onToggle={toggleTodo}/>
      </div>
    </Context.Provider>
  )
}

export default App
