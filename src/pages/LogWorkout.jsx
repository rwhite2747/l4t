import React, { useState } from "react";
import WorkoutForm from "../components/WorkoutForm";

const LogWorkout = () => {
  const [workouts, setWorkouts] = useState([]);

  const handleLogWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div>
      <h1>Log Workout</h1>
      <WorkoutForm onSubmit={handleLogWorkout} />
    </div>
  );
};

export default LogWorkout;
