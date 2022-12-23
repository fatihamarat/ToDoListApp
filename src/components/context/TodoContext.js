import React, {createContext, useContext, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const todoContext = createContext();

export const TodoProvider = ({children})=>{
    const [todos, setTodos] = useState([
        {
            id:1,
            text:"Learn React",
            completed:true
        }
    ]);

    const addTodo = (text)=>{
        const checkTodos = todos.find(item=>item.text === text);

        if(checkTodos !== todos.text){
            setTodos((prev)=>([...prev]))
        }
        else{setTodos((prev)=>([...prev,{id:uuidv4(),completed:false,text}]))  }
          
    };


    const toggleTodo = (id)=>{
        const clonedTodos = [...todos];
        const newTodo = clonedTodos.find(todo=>todo.id === id);
        newTodo.completed = !newTodo.completed;
        setTodos(clonedTodos);
    }
    const destroyTodo = (id)=>{
        const clonedTodos = [...todos];
        const newTodo = clonedTodos.find(todo=>todo.id === id);
        clonedTodos.splice(newTodo,1);
        setTodos(clonedTodos);

    }

    const values = {
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        destroyTodo
    };

    return <todoContext.Provider value={values}>{children}</todoContext.Provider>
};

export const useTodo = ()=>{
    const context = useContext(todoContext);
    if(context === undefined){
       throw new Error("useTodo hook must be call inside TodoProvider component"); 
    };

    return context;
};