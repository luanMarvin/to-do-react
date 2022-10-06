import React, {useState}from "react";
import PostNewTask from "./PostNewTask";
import "./PostTasks.css"

const PostTasks = () => {
    const [message, setMessage] = useState('');
    const handleChange = event => {
        setMessage(event.target.value);
    }
    const cleanValue = () => {
        document.querySelector("#message").value = ""
    }
    return(
        <form className="form-container" onSubmit={()=>{PostNewTask(message); cleanValue();}}>
            <input 
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            />
            <button 
            className="form-button"
            type="submit"
            >
            </button>
        </form>
    )
}



export default PostTasks;