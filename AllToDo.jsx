import React from "react";
import style from "./allTodos.module.css"
const AllToDo=(prop)=>{
    console.log(prop);
    let{allTodos,deleteTodo,editTodo}=prop;
    
    return(
        <div id={style.todoWrapper}>
            {
                allTodos.map((ele)=>{
                    console.log(ele);
                    let{text,id}=ele;
                    return(
                        <section key={id}>
                            <h1>{text}</h1>
                            <button onClick={()=>editTodo(id)}>edit</button>
                            <button onClick={()=>deleteTodo(id)}>delete</button>
                        </section>
                    );
                })
            }

        </div>
    )
}
export default AllToDo;