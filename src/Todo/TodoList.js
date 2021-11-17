import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

// Вариант добавления инлайн стилей в компонент
const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

function TodoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <TodoItem
          todo={todo}
          index={index}
          key={todo.id}
          onChange={props.onToggle}
        />
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default TodoList
