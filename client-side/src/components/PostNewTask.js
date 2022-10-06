const PostNewTask = inputValue => {
    fetch("http://127.0.0.1:8024/api/tasks",
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({message: inputValue, completed: false})
    })
}

export default PostNewTask;