import { useState } from "react";
import TodoDisplay from "./components/TodoDisplay";
import TodoForm from "./components/TodoForm";



const App = () => {
  // STATE
  const [todos, setTodos] = useState([])

  // FUNCTION FOR ADDING TASK
  const addNewTodo = (todoObj) =>{

  }
  // FUNCTION FOP DELETING TASK
  const deleteTodo = (index) => {

  }



  return (
    <fieldset>
      <legend>App.js</legend>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoDisplay deleteTodo={deleteTodo} />
    </fieldset>
  )

}

export default App;