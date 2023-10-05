import { Component } from "react";
import { Feedback } from "./Feedback/Feedback"; // Шлях до Feedback файлу

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  render() {
    return (
      <div>
        <Feedback state={this.state} />
      </div>
    );
  }
}

export default App;


// import { Feedback } from "Feedback/Feedback";
// import { Component } from "react";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }
// }

// function App() {
//   return (
//     <div>
//       <Feedback state={this.state} />
//     </div>
//   );
// }

// export default App;
