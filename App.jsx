/* eslint-disable no-unused-vars */

import { useEffect, useState } from 'react'
import './App.css'
import { Todoprovider } from './Context';
import Todoform from './components/Todoform';
import TodoItem from './components/TodoItem';


function App() {
 
  const [todos,setTodos]=useState([]);
  const addTodo =(todo)=>{
    // inserting new todo objet into todos array that is already existing, here the prev gives the access to that existing array of todos.
    setTodos((prev)=>[{id: Date.now(),...todo},...prev]);
  };
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo:prevTodo)))
  };
  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((todo)=>todo.id  !== id));
  }  ;
 
  const toggleCompleted=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  };
  
  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos);
    }
  },[])
// whebn todos changes we update the local storage.
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])



return (
    <Todoprovider value={{todos, addTodo,updateTodo,deleteTodo,toggleCompleted}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
               <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                          
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
