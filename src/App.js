import { Feedback } from "./Feedback"
import style from "./Feedback.module.css"

function App() {
  return (
    <div>
      <p className={style.titleText}>
        Please leave feedback
      </p>
      <Feedback />
    </div>
  );
}

export default App;
