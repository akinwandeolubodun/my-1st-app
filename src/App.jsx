import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItem from "./ToDoItem";
import { useState, useRef } from "react";

function ToDoList() {

  const [ToDoItems, setToDoItems] = useState([])
  const inputRef = useRef();

  function handleDelete(id) {

    console.log(id)
    setToDoItems(
    ToDoItems.filter((toDo) => {
    return toDo.id !== id;
    }) 
    )
  }

  function handleAdd() {

    console.log(inputRef.current.value)
    setToDoItems([...ToDoItems, {
      text: inputRef.current.value,
    id: Date.now()
    }])
    inputRef.current.value = ""
  }
  
  return (
    <>
      <div className="container board mt-3">
        <div className="row text-center">
          <h1>To Do List:</h1>
          <p>
            Click 'Add' to add a new to do and click a todo to cross it off!
          </p>
        </div>
        <div className="row justify-center text-center">
          {/* To Do Items will go here later */}
          {
            ToDoItems.map((toDo) => {
              console.log(toDo.id)
              return(
                <ToDoItem key={toDo.id} toDoTask={toDo.text} handleDelete={() => handleDelete(toDo.id)}/>
              )
            })
          }

        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write ToDo Task here..."
                aria-label="ToDoInput"
                ref={inputRef}
              />
              <div className="input-group-append">
                <button onClick={handleAdd} className="btn btn-primary h-100 m-0"
                  type="button"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;

