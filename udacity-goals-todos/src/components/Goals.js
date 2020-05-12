import React from "react";
import { handleAddGoal, handleRemoveGoal } from "../actions/goals";
import { connect } from "react-redux";
import List from "./List";

class Goals extends React.Component {
  addItem = (e) => {
    e.preventDefault();

    this.props.dispatch(
      handleAddGoal(this.input.value, (value = "") => {
        this.input.value = value;
      })
    );
  };

  removeItem = (goal) => {
    this.props.dispatch(handleRemoveGoal(goal));
  };

  render() {
    return (
      <div>
        <h1>Goal List</h1>
        <input
          type="text"
          placeholder="Add Goal"
          ref={(input) => (this.input = input)}
        />
        <button onClick={this.addItem}>Add Goal</button>
        <List removeItem={this.removeItem} items={this.props.goals} />
      </div>
    );
  }
}

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
