import React from "react";
import { Exercise } from "./models/Exercise";
import {
  ExerciseAction,
  ExerciseActionWithPayload,
} from "./store/exerciseReducer";

export const InitialExercise: Exercise = {
  series: 1,
  time: 0,
  currentSeries: 0,
  timeElapsed: 0,
};

const TimerContext = React.createContext<{
  state: Exercise;
  dispatch: React.Dispatch<ExerciseAction | ExerciseActionWithPayload>;
}>({ state: InitialExercise, dispatch: () => null });

export default TimerContext;
