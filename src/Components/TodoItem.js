import React, { useContext } from 'react'
import { Context } from '../context'

export default function TodoItem({ id, title, completed }) {
  // const [checked, setChecked] = useState(props.completed)
  const { /*toggleTodo, removeTodo*/ dispatch } = useContext(Context)
  const cls = ['todo-item animate__zoomIn']

  if (completed) {
    cls.push('completed')
  }

  return (
    <li className={cls.join(' ')}>
      <div className='todo-title'>
        <label htmlFor={id}>
          <input
            id={id}
            type='checkbox'
            defaultChecked={completed}
            onChange={() => {
              dispatch({ type: 'toggle', payload: id })
            }}
          />
          <span className='todo-text'>{title}</span>
        </label>
      </div>
      <div className='button'>
        <i
          className='fas fa-trash'
          onClick={() => {
            dispatch({
              type: 'remove',
              payload: id,
            })
          }}
        />
      </div>
    </li>
  )
}
