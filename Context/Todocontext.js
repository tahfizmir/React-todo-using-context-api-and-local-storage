/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
//context banaya
export const Todocontext = createContext({
    todos:[
        {id :1, todo:"todo message",
            completed:false,
        }
        
    ],
    addTodo: (todo)=>{},
    updateTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:(id)=>{}

});
export const useTodo = () => {
  //context ko export kiya
  return useContext(Todocontext);
};
//wrap karne ke liye
export const Todoprovider = Todocontext.Provider;
