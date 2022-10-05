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
                                <button className="task-button-complete" onClick={() => {CompleteTask(task._id)}}>
                                    Tarefa Feita
                                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.6184 9.89781C16.9522 9.57931 16.9647 9.05048 16.6462 8.71662C16.3277 8.38277 15.7989 8.37032 15.465 8.68882L9.91205 13.9864L7.42892 11.6134C7.09534 11.2946 6.56649 11.3066 6.24771 11.6402C5.92893 11.9738 5.94093 12.5026 6.27451 12.8214L9.33436 15.7455C9.65709 16.0539 10.1653 16.0541 10.4882 15.746L16.6184 9.89781Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4467 0.938782C5.4484 0.938782 0.585815 5.80137 0.585815 11.7997C0.585815 17.798 5.4484 22.6606 11.4467 22.6606C17.445 22.6606 22.3076 17.798 22.3076 11.7997C22.3076 5.80137 17.445 0.938782 11.4467 0.938782ZM2.25672 11.7997C2.25672 6.72418 6.37122 2.60969 11.4467 2.60969C16.5222 2.60969 20.6367 6.72418 20.6367 11.7997C20.6367 16.8752 16.5222 20.9897 11.4467 20.9897C6.37122 20.9897 2.25672 16.8752 2.25672 11.7997Z" fill="white"/>
                                    </svg>
 
                                    </button>
                                <button className="task-button-rmv" onClick={() => {DeleteTask(task._id)}}>
                                    Excluir
                                    <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.89188 9.29331C8.35329 9.29331 8.72733 9.66736 8.72733 10.1288V16.8124C8.72733 17.2738 8.35329 17.6478 7.89188 17.6478C7.43047 17.6478 7.05643 17.2738 7.05643 16.8124V10.1288C7.05643 9.66736 7.43047 9.29331 7.89188 9.29331Z" fill="white"/>
                                    <path d="M13.7401 16.8124V10.1288C13.7401 9.66736 13.366 9.29331 12.9046 9.29331C12.4432 9.29331 12.0691 9.66736 12.0691 10.1288V16.8124C12.0691 17.2738 12.4432 17.6478 12.9046 17.6478C13.366 17.6478 13.7401 17.2738 13.7401 16.8124Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89188 0.938782C7.22715 0.938782 6.58965 1.20284 6.11962 1.67288C5.64958 2.14291 5.38552 2.78041 5.38552 3.44514V4.28059H1.20826C0.746848 4.28059 0.372803 4.65464 0.372803 5.11605C0.372803 5.57746 0.746848 5.9515 1.20826 5.9515H2.04371V20.9897C2.04371 21.4328 2.21975 21.8578 2.53311 22.1712C2.84646 22.4845 3.27146 22.6606 3.71462 22.6606H17.0819C17.525 22.6606 17.95 22.4845 18.2634 22.1712C18.5767 21.8578 18.7528 21.4328 18.7528 20.9897V5.9515H19.5882C20.0496 5.9515 20.4237 5.57746 20.4237 5.11605C20.4237 4.65464 20.0496 4.28059 19.5882 4.28059H15.411V3.44514C15.411 2.78041 15.1469 2.14291 14.6769 1.67288C14.2068 1.20284 13.5693 0.938782 12.9046 0.938782H7.89188ZM13.7401 4.28059V3.44514C13.7401 3.22357 13.652 3.01106 13.4954 2.85439C13.3387 2.69771 13.1262 2.60969 12.9046 2.60969H7.89188C7.6703 2.60969 7.4578 2.69771 7.30113 2.85439C7.14445 3.01106 7.05643 3.22357 7.05643 3.44514V4.28059H13.7401ZM3.71462 5.9515V20.9897H17.0819V5.9515H3.71462Z" fill="white"/>
                                    </svg>

                                    </button>
                            </div>
                        </div>
                    )})
                }
            </div>
        )
    }
}
export default GetTasks;