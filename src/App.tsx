import { useReducer } from "react";
import styles from "./App.module.scss";
import TimerContext, { InitialExercise } from "./TimerContext";
import TimerButton from "./components/TimerButton/TimerButton.component";
import TimerDisplay from "./components/TimerDisplay/TimerDisplay.component";
import TimerSetup from "./components/TimerSetup/TimerSetup.component";
import exerciseReducer from "./store/exerciseReducer";

function App() {
  const timerContext = TimerContext;
  const [state, dispatch] = useReducer(exerciseReducer, InitialExercise);

  return (
    <timerContext.Provider value={{ state: state, dispatch }}>
      <div className={styles.mainContainer}>
        <TimerDisplay />
        <TimerButton />
        <TimerSetup />
      </div>
    </timerContext.Provider>
  );
}

export default App;
