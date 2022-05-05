import logo from './logo.svg';
import './App.css';
import Form from "./components/form";
import Items from "./components/items";

import React, {useState} from "react";
function App() {
    const [todo, setTodo] = useState([])
    const addTask = (task)=> {
        if(task !==''){
            let id = 1
            if (todo.length > 0) {
                id = todo[0].id + 1
            }
            let todoObjects = {
                id: id,
                text: task,
                completed: false
        }
            let todoArray = [todoObjects, ...todo]
            setTodo(todoArray)

        }


    }

    const removeTodo =(id)=>{
        let updatedTodos = [...todo].filter((todonot)=> todonot.id !== id)
        setTodo(updatedTodos)
        console.log("remove Task")
    }

    const completeTask=(id)=>{
        let updatedTodosOnComplete = [...todo].filter((todonot)=> todonot.id !== id)
        setTodo(updatedTodosOnComplete)
        let completeTodos
    }
    //getting the day
    const date = new Date()
    const days = {weekday: 'long'}
    const day = date.toLocaleString('en-us', days)
    const dayNumber = date.getDay()
    const months = {month:'long'}
    const getMonth = date.toLocaleString('en-us', months)

    function checkDaySuffix(){
        let suffix=""
        if(dayNumber ===1){
            suffix="st"
        }
        else if(dayNumber===2){
            suffix="nd"
        }
        else if(dayNumber===3){
            suffix="rd"
        }
        else{
            suffix= "th"
        }
        return suffix
    }

  return (
    <div className="box">
            <div className={"container"}>
                <h1>{day}, {dayNumber}{checkDaySuffix()}</h1>
                <p>{getMonth}</p>
                <Form addtask={addTask}/>
                {todo.map((todoer)=>{
                    return(
                        <Items removeTodo={removeTodo}work={todoer} completeTodo={} key={todo.id}/>
                    )
                })}
            </div>
    </div>
  );
}

export default App;
