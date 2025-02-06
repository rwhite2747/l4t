import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

const Dashboard = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [newWorkout, ...prevWorkouts]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", padding: "1rem" }}>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        LIIFT4 Workout Tracker
      </Typography>
      <WorkoutForm onAddWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
};

export default Dashboard;
