import { useState } from 'react'
import Button from './Button.jsx'
import './App.css'
function App() {
  const [taskList, setTaskList] = useState([])
  const [task,setTask] = useState("")
  const handleChange =(event)=>{
    setTask(event.target.value)
  }
  const handleAdd = () =>{
    if(task.length!==0){
      setTaskList([...taskList,task])
      setTask("")
    }
  }
  const handleDelete = (index) => {
    const output = taskList.filter((item, key) => key !== index);
    setTaskList(output);
    console.log(taskList)
};
const handleUpdate = (index) => {
  const updatedTaskList = [...taskList];
  if (index >= 0 && index < updatedTaskList.length) {
    let updatedTodo = prompt("Updated Todo");
      if (updatedTodo !== null) {
      updatedTaskList[index] = updatedTodo;
      setTaskList(updatedTaskList);
    }
  }
};

  return (
    <>
    <h1>Todo App</h1>
      <input type="text" value={todos} onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
      <ol>
        {taskList.map((item,index)=>{
          return(
          <li key={index}><span>{item}</span>
          <button onClick={()=>handleDelete(index)}>delete</button>
          <button onClick={()=>handleUpdate(index)}>Update</button>
          </li>)
        })}
      </ol>
    </>
  )
}
export default App
