import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit); // 배열의 요소들 {} 의 인덱스번호 0,1,2
    habits[index].count++; // 해당 인덱스가 0인경우, 0번째 요소의 count 수를 +1 증가시켜준다.
    this.setState({ habits: habits });
    // key 가 habits, 데이터의 value가 habit => 키와 값의 이름이 같을경우 ({habit})으로 줄여서 쓸 수 있다.
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    // 음수가 나오지 않도록, count가 음수가 되면 0을 리턴하고, 아닌경우 -1을 해준다.
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habit });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  handleReset = () => {
    // 모든 배열의 count요소를 모두 돌면서 0으로 바꿔준다. -> map
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
