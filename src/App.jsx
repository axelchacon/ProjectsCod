import { useState } from "react";
import "./style.css";
function App() {
  const [newItem, setNewItem] = useState(""); // Variable de estado 1 //se empiea con un string vació porque no hay nada al incio en el input;//paso 1 junto con la impotración
  const [todos, setTodos] = useState([]); // Variable de estado 2
  
  function handleChange (event){
    setNewItem (event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    // console.log("ok");
    setTodos([...todos, { 
      id: crypto.randomUUID(),
      title: newItem,
      completed: false},
    ]);
    setNewItem("");
}
function toggleTodo(id,checked){

  setTodos((currentTodos)=> {
    return currentTodos.map((todo)=>{
      if(todo.id == id) {
        return {...todo, completed:checked}
      }
      return todo; 
    })
  })
}
//console.log(todos); esto se muestra en cosola y aún no renderiza la lista. Para renderiar, es paso 1.
console.log(todos)
  return (
    <>
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row"> 
        <label htmlFor="item">
          New Item 
        </label>
        <input type ="text" id ="item" value ={newItem} onChange={handleChange} />
      
      </div>
      <button className="btn">Add</button>
    </form>
     <h1 className="header">Todo List</h1>
     <ul className= "list"> 
     {/*  Para renderiar, es paso 2.  Se pone entre llaves para usar la codificación react jsx   */}
     {
      todos.map((todo)=>{
        return (
          <li key ={todo.id}>
            <label>
               <input type = "checkbox" onChange={(e)=>toggleTodo(todo.id, e.target.checked)}/>
               {todo.title}
            </label>
            <button className="btn btn-danger">DELETE</button> 
          </li>

        )
      })
     }
      
       {/* <li>
         <label>
          <input type = "checkbox"/>
          Item 1

         </label>
         <button className="btn btn-danger">DELETE</button>

       </li> */}

     </ul>
  
     </>
  )
}

export default App
