import React from "react";
import {AiOutlineClose, AiOutlineCloseCircle, ImAngry} from "react-icons/all";

export default function Items(props){
    const {work, removeTodo} = props
    return(
        <div className={"todo-items"}>
            <p> {props.work.text}</p>
            <div>
                <AiOutlineCloseCircle className={"icon"} />
            </div>
        </div>
    )
}