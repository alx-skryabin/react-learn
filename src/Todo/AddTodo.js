import React, {useState} from 'react'

// кастомный хук
function useInputValue(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: e => setValue(e.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}

function AddTodo({onCreate}) {
  const input = useInputValue('')

  function submitHandler(e) {
    e.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        {...input.bind}
      />
      <button type="submit">Add Car</button>
    </form>
  )
}

export default AddTodo
