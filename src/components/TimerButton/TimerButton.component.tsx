import { useContext } from "react";
import TimerContext from "../../TimerContext";
import styles from "./TimerButton.module.scss";

const TimerButton = () => {
  const {
    state: { time, timeElapsed },
    dispatch,
  } = useContext(TimerContext);

  const runTimer = () => {
    let elapsedTime = timeElapsed;
    let lastUpdate = Date.now();

    dispatch({
      type: "set_interval_id",
      payload: setInterval(() => {
        if (elapsedTime < time) {
          const now = Date.now();
          const dt = now - lastUpdate;

          elapsedTime = elapsedTime + dt / 1000;
          lastUpdate = now;
          dispatch({
            type: "set_time_elapsed",
            payload: Math.round(elapsedTime * 100) / 100,
          });
        } else return;
      }),
    });
  };

  const handleStart = () => {
    dispatch({ type: "start" });
    runTimer();
  };

  return (
    <div className={styles.btnBar}>
      <button className={styles.btn} onClick={handleStart}>
        ▶
      </button>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: "pause_timer" })}
      >
        ⏯
      </button>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: "next_series" })}
      >
        ⏭
      </button>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: "reset" })}
      >
        ⌫
      </button>
    </div>
  );
};

export default TimerButton;
