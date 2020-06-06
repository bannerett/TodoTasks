import React, { useState, useEffect, useReducer } from 'react'
import TodoList from './Components/TodoList'
import { Context } from './context'
import reducer from './readucer'

export default function App() {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('todos')) || []
  )
  const [todoTitle, setTodoTitle] = useState('')
  // const [todos, setTodos] = useState([])

  const clickHandler = event => {
    console.log(event.clientX)
  }
  //Get data from localStorage
  /*  useEffect(() => {
    //If localStorage is empty set data to []
    if (!localStorage.length) {
      localStorage.setItem('todos', JSON.stringify(todos))
    }
    //If localStorage is not empty get data
    // const raw = localStorage.getItem('todos') || setTodos([])
    // setTodos(JSON.parse(raw))
  }, [todos])*/

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  //Set data to localStorage
  /*  useEffect(() => {
    document.addEventListener('click', clickHandler)
    localStorage.setItem('todos', JSON.stringify(todos))
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [todos])*/

  const addTodo = event => {
    if ((event.key === 'Enter' || event.type === 'click') && todoTitle !== '') {
      dispatch({
        type: 'add',
        payload: todoTitle,
      })

      // setTodos([
      //   ...state,
      //   {
      //     id: Date.now(),
      //     title: todoTitle,
      //     completed: false,
      //   },
      // ])
      setTodoTitle('')
      window.M.toast({ html: 'Task created' })
    }
    console.log(state)
  }

  /*  const removeTodo = id => {
    setTodos(
      todos.filter(e => {
        return e.id !== id
      })
    )
  }*/

  /*const toggleTodo = id => {
    setTodos(
      todos.map(e => {
        if (e.id === id) {
          e.completed = !e.completed
        }
        return e
      })
    )
  }*/

  return (
    <Context.Provider
      value={{
        /*toggleTodo, removeTodo*/
        dispatch,
      }}
    >
      <div className='todo-app row'>
        <div className='container'>
          <header>
            <h1 className='display'>Todo List App</h1>
          </header>

          <div className='input-field col s12'>
            <input
              id='todo'
              type='text'
              className='validate'
              value={todoTitle}
              onChange={event => {
                console.log(event.target.value)
                setTodoTitle(event.target.value)
              }}
              onKeyPress={addTodo}
            />
            <label htmlFor='todo'>Create new todo</label>
            <button
              type='submit'
              className='waves-effect waves-light btn'
              onClick={addTodo}
            >
              Create
            </button>
          </div>
          <TodoList todos={state} />
        </div>
      </div>
    </Context.Provider>
  )
}
