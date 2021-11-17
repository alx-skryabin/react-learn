import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '8px 0',
    padding: '.5rem 1rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    background: '#eee'
  }
}

function TodoItem({todo, index, onChange}) {
  // onChange - прокинут от родителя к элементу
  // removeTodo - прокинут через context напрямую
  const {removeTodo} = useContext(Context)
  const {id, title, completed} = todo
  const classes = []

  if (completed) classes.push('done')

  return (
    <li style={styles.li}>
      <div>
        <strong>{++index}.</strong>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onChange(id)}
        />
        <span className={classes.join(' ')}>{title}</span>
      </div>
      <button onClick={removeTodo.bind(null, id)}>
        &times;
      </button>
    </li>
  )
}

// Валидация передаваемых параметров в компонент
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired
}

export default TodoItem
