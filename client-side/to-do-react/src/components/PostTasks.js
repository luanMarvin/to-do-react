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
        <div className="form-container">
            <input 
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
            />
            <button 
            className="form-button" 
            onClick={()=>{PostNewTask(message); cleanValue();}}>
            </button>
        </div>
    )
}



export default PostTasks;