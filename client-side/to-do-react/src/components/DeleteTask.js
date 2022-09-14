function DeleteTask(taskID){
    fetch(`http://127.0.0.1:8024/api/tasks/${taskID}`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "DELETE"
    })
};

export default DeleteTask;