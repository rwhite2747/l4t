import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Dashboard from "./pages/Dashboard";
import LogWorkout from "./pages/LogWorkout";
import History from "./pages/History";
import Progress from "./pages/Progress";
import workoutSchedule from "./data/workoutSchedule";

function App() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(workoutSchedule);
  }, []);

  return (
    <Router>
      <Container>
        <Typography variant="h3" gutterBottom>
          LIIFT4 Workout Tracker
        </Typography>
        <Routes>
          <Route path="/" element={<Dashboard schedule={schedule} />} />
          <Route path="/log" element={<LogWorkout />} />
          <Route path="/history" element={<History />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
