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
            ><svg width="34" height="34" viewBox="0 0 34 34" fill="FF0000" xmlns="http://www.w3.org/2000/svg">
            <path id="add-btn"fill-rule="evenodd" clip-rule="evenodd" d="M17.0686 3.11858C9.43994 3.11858 3.25571 9.3028 3.25571 16.9314C3.25571 24.5601 9.43994 30.7443 17.0686 30.7443C24.6972 30.7443 30.8814 24.5601 30.8814 16.9314C30.8814 9.3028 24.6972 3.11858 17.0686 3.11858ZM0.744285 16.9314C0.744285 7.91578 8.05292 0.607147 17.0686 0.607147C26.0842 0.607147 33.3929 7.91578 33.3929 16.9314C33.3929 25.9471 26.0842 33.2557 17.0686 33.2557C8.05292 33.2557 0.744285 25.9471 0.744285 16.9314ZM9.53432 16.9314C9.53432 16.2379 10.0965 15.6757 10.79 15.6757H15.8129V10.6529C15.8129 9.95934 16.3751 9.39714 17.0686 9.39714C17.7621 9.39714 18.3243 9.95934 18.3243 10.6529V15.6757H23.3472C24.0407 15.6757 24.6029 16.2379 24.6029 16.9314C24.6029 17.6249 24.0407 18.1871 23.3472 18.1871H18.3243V23.21C18.3243 23.9035 17.7621 24.4657 17.0686 24.4657C16.3751 24.4657 15.8129 23.9035 15.8129 23.21V18.1871H10.79C10.0965 18.1871 9.53432 17.6249 9.53432 16.9314Z" fill="white"/>
            </svg>
            
            </button>
        </form>
    )
}



export default PostTasks;