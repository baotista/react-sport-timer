import { useContext } from "react";
import TimerContext from "../../TimerContext";
import styles from "./TimerDisplay.module.scss";

const TimerDisplay = () => {
  const {
    state: { series, timeElapsed, currentSeries },
  } = useContext(TimerContext);

  return (
    <div className={styles.container}>
      <div className={styles.time}>
        <div>⏱</div>
        <div className={styles.timeValue}>{timeElapsed.toFixed(2)}</div>
      </div>
      <div>
        series : {currentSeries} / {series}
      </div>
    </div>
  );
};

export default TimerDisplay;
