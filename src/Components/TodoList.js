import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
  console.log(props)
  return (
    <ul className='todo-list row' id='todo-list'>
      {!props.todos.length
        ? 'No todos'
        : props.todos.map(e => (
            <TodoItem
              key={e.id}
              id={e.id}
              title={e.title}
              completed={e.completed}
            />
          ))}
    </ul>
  )
}
