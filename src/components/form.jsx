import React, {useState} from "react";

function Form (props){

    const [input, setInput] = useState("")

    const holdInput = (e)=>{
        setInput(e.target.value)
    }
    const submit = (task)=>{
        task.preventDefault()
        props.addtask(input)
        setInput("")
    }
    return(
        <form onSubmit={submit}>
            <input className={"task"}
                type={"text"}
                placeholder={"Enter task"}
                onChange={holdInput}
                value={input}
            />
            <button type={"submit"}>Add task</button>
        </form>
    )
}
export default Form