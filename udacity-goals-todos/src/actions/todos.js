import API from "goals-todos-api";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id,
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id,
  };
}

export function handleAddTodo(name, callback) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo));
        callback();
      })
      .catch((e) => {
        alert("There was an error. Try again!");
        callback(name);
      });
  };
}

export function handleRemoveTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo).catch((e) => {
      dispatch(addTodo(todo));
      alert("An error ocurred. Try again!");
    });
  };
}

export function handleToggle(id) {
  return (dispatch) => {
    dispatch(toggleTodo(id));

    return API.saveTodoToggle(id).catch((e) => {
      dispatch(toggleTodo(id));
      alert("An error ocurred. Try again!");
    });
  };
}
