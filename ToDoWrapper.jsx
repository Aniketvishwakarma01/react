import React, { useState } from "react";
import CreateToDo from "./CreateToDo";
import AllToDo from "./AllToDo";
const ToDoWrapper=()=>{
    let [ToDo,setToDo]=useState("");
    let[allTodos,setAllTodos]=useState([{text:"hello world",id:1}])
    let handleToDo=(e)=>{
        setToDo(e.target.value);
    };

    let createToDo=(e)=>{
        e.preventDefault();
        console.log(ToDo);
        if(ToDo.trim()!==""){
            let newToDo={
                text:ToDo,
                id:Date.now(),
            };
            console.log(newToDo);
            setAllTodos([...allTodos,newToDo]);
            setToDo("")
        }
        else{
            alert("empty todo")
        }
        
        
    };
    console.log(allTodos);

    let deleteTodo=(id)=>{
        console.log("deleted",id);
       let filteredTodo= allTodos.filter((ele)=>{
            return ele.id!==id;
        });
        setAllTodos(filteredTodo);
    };

    let editTodo=(id)=>{
        console.log("edit",id);
       let editTodo= allTodos.find((ele)=>{
            return ele.id===id
        })

        console.log(editTodo);
        let filteredTodo= allTodos.filter((ele)=>{
            return ele.id!==id;
        });
        setAllTodos(filteredTodo);
        setToDo(editTodo.text);
        
    };
    
    return(
        <div>
            <CreateToDo todo={ToDo} handleTodo={handleToDo} createToDo={createToDo}/>
            <AllToDo allTodos={allTodos} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </div>
    )
}
export default ToDoWrapper;