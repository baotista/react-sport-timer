export type Exercise = {
  /** number of series */
  series: number;
  /** time for each series */
  time: number;
  /** the current series beeing timed */
  currentSeries: number;
  /** Time elapsed on the current serie */
  timeElapsed: number;
  /** The index of the interval running the timer */
  intervalId?: number;
};
