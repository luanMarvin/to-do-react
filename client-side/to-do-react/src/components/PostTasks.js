import React, {useState}from "react";
import PostNewTask from "./PostNewTask";

const PostTasks = () => {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    }

    const cleanValue = () => {
        document.querySelector("#message").value = ""
    }

    return(
        <>
            <input 
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            />
            <button onClick={()=>{PostNewTask(message); cleanValue();}}>Adicionar</button>
        </>
    )
}



export default PostTasks;