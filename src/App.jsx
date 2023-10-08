import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoItem from "./ToDoItem";

function ToDoList() {
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
          <ToDoItem toDoTask="Check the Kitchen" />
          <ToDoItem toDoTask="Get my complimentary" />
          <ToDoItem toDoTask="Get out and get home" /> 
          <ToDoItem />
        </div>
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-md-6 ">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Write ToDo Task here..."
                aria-label="ToDoInput"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary h-100 m-0"
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

