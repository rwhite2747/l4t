// src/components/WorkoutSchedule.js
import React from "react";
// If using Create React App, you can import JSON directly:
import workouts from "../data/workouts.json";

const WorkoutSchedule = () => {
  // Group workouts by Week and then by Day
  const groupedWorkouts = workouts.reduce((acc, workout) => {
    const { Week, Day } = workout;
    if (!acc[Week]) {
      acc[Week] = {};
    }
    if (!acc[Week][Day]) {
      acc[Week][Day] = [];
    }
    acc[Week][Day].push(workout);
    return acc;
  }, {});

  // Optionally, sort days or exercises if needed.
  // For example, if you want to sort by sequence or by a custom order, you can add that logic here.

  return (
    <div>
      {Object.entries(groupedWorkouts).map(([week, days]) => (
        <section key={week}>
          <h2>{week}</h2>
          {Object.entries(days).map(([day, exercises]) => (
            <div key={day} style={{ marginLeft: "1rem" }}>
              <h3>{day}</h3>
              <ul>
                {exercises.map((exercise, index) => (
                  <li key={index}>
                    {exercise.Sequence ? (
                      <span>
                        <strong>{exercise.Sequence}</strong> -{" "}
                        {exercise.Exercise}
                      </span>
                    ) : (
                      <span>{exercise.Exercise}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
};

export default WorkoutSchedule;
