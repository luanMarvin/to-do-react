function CompleteTask(taskID){
    fetch(`http://127.0.0.1:8024/api/tasks/${taskID}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({completed: true})
    })
};

export default CompleteTask;