import React from "react";
import style from "./createTodo.module.css";
const CreateToDo=(prop)=>{
    let {todo, handleTodo, createToDo}=prop;
    return(
        <div id={style.createToDo}>
            <form onSubmit={createToDo}>
                <h2>Create To Do</h2>
                <input type="text" placeholder="Todo..." value={todo} onChange={handleTodo} />
                <button>Create</button>
            </form>
        </div>
    )
}
export default CreateToDo;