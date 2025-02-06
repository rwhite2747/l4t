import React from "react";

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      <h2>Workout History</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.sets} sets, {workout.reps} reps,{" "}
            {workout.weight} lbs
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
