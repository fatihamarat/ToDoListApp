import React from 'react'
import { useTodo } from '../context/TodoContext';

function ContentList() {
    const {todos, toggleTodo, destroyTodo} = useTodo();
    const onChange = (id)=>{
        toggleTodo(id);
    };
    const onClick = (id)=>{
        destroyTodo(id);
    };

  return (
    <ul className="todo-list">
        {todos.map(todo=>(
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={todo.completed} onChange={()=>onChange(todo.id)}/>
                    <label key={todo}>{todo.text}</label>
                    <button className="destroy" onClick={()=>onClick(todo.id)} ></button>
                </div>
            </li>

        ))}
            
    </ul>
  );
}

export default ContentList;