import "./App.css";
import GetTasks from "./components/GetTasks";
import Header from "./components/Header";
import PostTasks from "./components/PostTasks";


function App() {
  return (
    <>
      <Header/>
      <PostTasks/>
      <GetTasks/>
    </>
  );
}

export default App;
