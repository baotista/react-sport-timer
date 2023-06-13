import { ChangeEventHandler, useContext } from "react";
import TimerContext from "../../TimerContext";
import styles from "./TimerSetup.module.scss";

const TimerSetup = () => {
  const { state, dispatch } = useContext(TimerContext);

  const updateSeries: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (parseInt(value)) {
      dispatch({ type: "setSeries", payload: parseInt(value) });
    }
  };

  const updateTime: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    if (parseInt(value)) {
      dispatch({ type: "seTime", payload: parseInt(value) });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formGroup}>
        <label htmlFor="series">Series</label>
        <input
          type="number"
          id="series"
          value={state?.series}
          onChange={updateSeries}
          min={1}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="series">Time per serie</label>
        <input
          type="number"
          value={state?.time}
          onChange={updateTime}
          min={1}
        />
      </div>
    </div>
  );
};

export default TimerSetup;
