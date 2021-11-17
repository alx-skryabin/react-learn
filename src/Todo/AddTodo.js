import React, {useState} from 'react'

function AddTodo({onCreate}) {
  const [value, setValue] = useState('')

  function submitHandler(e) {
    e.preventDefault()

    if (value.trim()) {
      onCreate(value)
      setValue('')
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add Car</button>
    </form>
  )
}

export default AddTodo
