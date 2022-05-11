import React from "react";

export default function Delete(props){

    return(
        <div>
            <button className={"clear"} type={"submit"} onClick={props.delete}>clear</button>
        </div>
    )
}