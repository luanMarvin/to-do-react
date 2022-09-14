import React, { useState, useEffect } from "react";
import DeleteTask from "./DeleteTask";
import CompleteTask from "./CompleteTask";
import "./GetTasks.css";


const GetTasks = () => {
    const [GetTasks, setAllTasks] = useState();
    useEffect(() => {
        fetch("http://localhost:8024/api/tasks")
        .then(response => response.json())
        .then(data => {
            setAllTasks(data)
        })
    },[GetTasks])
    if(GetTasks){
        return(
            <div className="main-task-container">
                {
                    GetTasks.map(task => {
                        let classCompleted;
                        if(task.completed){classCompleted = "task-container-true"} else {classCompleted = "task-container-false"}
                        return (
                        <div className={classCompleted} id={task._id}>
                            <h3 className="task-message">{task.message}</h3>
                            <div className="button-container">
                                <button className="task-button-complete" onClick={() => {CompleteTask(task._id)}} ></button>
                                <button className="task-button-rmv" onClick={() => {DeleteTask(task._id)}}></button>
                            </div>
                        </div>
                    )})
                }
            </div>
        )
    }
}
export default GetTasks;