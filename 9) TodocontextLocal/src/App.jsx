import { useState, useEffect } from 'react'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

//defining all functionality here
function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo =(todo)=> {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo))) // through map wecan find all todo which is objects,  iterate over an array of data (like an array of objects or strings)
   // prevTodo.id= every todo's id and id is updatedTodo = (id, todo) given id
  }

  const deletedTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id===id ? {...prevTodo, completed:!prevTodo.completed}: prevTodo))
  }

  // for local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  
  return (
    <TodoProvider value={{todos, addTodo, updatedTodo, deletedTodo, toggleCompleted}}>    {/* whenever we use provider we have to mention what provider will give like value and all */}
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl px-4 py-3 mx-auto text-white rounded-lg shadow-md">
                    <h1 className="mt-2 mb-8 text-2xl font-bold text-center">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='"w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
