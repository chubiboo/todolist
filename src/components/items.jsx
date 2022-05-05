import React from "react";
import {AiOutlineClose, AiOutlineCloseCircle,AiOutlineCheckCircle, ImAngry} from "react-icons/all";


export default function Items(props){
    const {work, removeTodo} =props
    return(
        <div className={"todo-items"}>
            <p contentEditable={"true"}> {work.text}</p>
            <div>
                <AiOutlineCloseCircle className={"icon"} onClick={()=> removeTodo(work.id)}   />
            </div>
        </div>
    )
}