import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

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
        <Section title="Please leave feedback">
          <Feedback
            good={good}
            neutral={neutral}
            bad={bad}
            handleClickUpdate={this.handleClickUpdate} />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad} />
        </Section>
      </div>
    );
  }
}

export default App;
