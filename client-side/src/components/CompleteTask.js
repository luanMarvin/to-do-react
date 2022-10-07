function CompleteTask(taskID){
  fetch("http://localhost:8024/api/tasks")
        .then(response => response.json())
        .then(data => {
          if(data[0].completed){
            fetch(`http://127.0.0.1:8024/api/tasks/${taskID}`,
              {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({completed: false})
              }
            )
          }
          else{
            fetch(`http://127.0.0.1:8024/api/tasks/${taskID}`,
              {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify({completed: true})
              }
            )
          }
        }
  )
}
export default CompleteTask;