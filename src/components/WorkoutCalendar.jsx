import React from "react";

const WorkoutCalendar = ({ schedule }) => {
  return (
    <div>
      <h2>Workout Schedule</h2>
      <ul>
        {schedule.map((session, index) => (
          <li key={index}>
            {session.week} - {session.day}: {session.exercise} (
            {session.sequence || "No sequence"})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutCalendar;
