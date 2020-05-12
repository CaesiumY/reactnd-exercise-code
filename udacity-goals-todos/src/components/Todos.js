import React from "react";
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggle,
} from "../actions/todos";
import { connect } from "react-redux";

class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, (value = "") => {
        this.input.value = value;
      })
    );
  };

  removeItem = (todo) => {
    this.props.dispatch(handleRemoveTodo(todo));
  };

  toggleItem = (id) => {
    this.props.dispatch(handleToggle(id));
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggleItem={this.toggleItem}
          removeItem={this.removeItem}
          items={this.props.todos}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
