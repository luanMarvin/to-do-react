import React, { useState, useEffect } from "react";

const GetTasks = () => {
    const [GetTasks, setAllTasks] = useState();
    useEffect(() => {
        fetch("http://localhost:8024/api/tasks")
        .then(response => response.json())
        .then(data => {
            setAllTasks(data)
        })
    },[])
    if(GetTasks){
        return(
            <div className="main-task-container">
                {
                    GetTasks.map(task => { 
                        return (
                        <div className="task-container" id={task._id}>
                            <h3 className="task-message">{task.message}</h3>
                            <button className="task-button-complete">O</button>
                            <button className="task-button-edit">E</button>
                            <button className="task-button-rmv">X</button>
                        </div>
                    )})
                }
            </div>
        )
    }
}
export default GetTasks;