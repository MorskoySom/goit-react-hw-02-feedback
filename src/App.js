import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClickUpdate = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      }
    })
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          handleClickUpdate={this.handleClickUpdate} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad} />
      </div>
    );
  }
}

export default App;

