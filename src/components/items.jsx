import React, {useState} from "react";
import {AiOutlineClose, AiOutlineCloseCircle,AiOutlineCheckCircle, ImAngry} from "react-icons/all";


export default function Items(props){
    const {work, removeTodo} =props
    const [complete, setComplete] = useState(false)

    function completedTask(){
        setComplete((previousState)=>{
            return !previousState
        })
    }


    return(
        <div className={"todo-items"}>
            <p style={{textDecoration : complete ? "line-through" : "none"}} contentEditable={"true"}> {work.text}</p>
            <div>
                <AiOutlineCloseCircle className={"icon"} onClick={()=> removeTodo(work.id)}   />
                <AiOutlineCheckCircle className={"icon"} onClick={completedTask}/>
            </div>
        </div>
    )
}