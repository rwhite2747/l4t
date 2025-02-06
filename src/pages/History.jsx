import React, { useState } from "react";
import WorkoutList from "../components/WorkoutList";

const History = () => {
  const [workouts] = useState([
    { exercise: "Bench Press", sets: 3, reps: 10, weight: 150 },
    { exercise: "Deadlift", sets: 3, reps: 8, weight: 200 },
  ]);

  return (
    <div>
      <h1>Workout History</h1>
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default History;
