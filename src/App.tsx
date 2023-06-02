import styles from "./App.module.scss";
import TimerButton from "./components/TimerButton/TimerButton.component";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay.component";
import TimerSetup from "./components/TimerSetup/TimerSetup.component";

function App() {
  return (
    <div className={styles.mainContainer}>
      <TimerDisplay />
      <TimerButton />
      <TimerSetup />
    </div>
  );
}

export default App;
