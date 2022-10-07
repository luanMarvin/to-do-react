function changeTask(taskID){
    let text = document.getElementsByClassName("input-modal")
    fetch(`http://127.0.0.1:8024/api/tasks/${taskID}`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({message: text[0].value})
        }
    )
};


export default changeTask;