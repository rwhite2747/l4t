import React, { useState } from "react";
import ProgressChart from "../components/ProgressChart";

const Progress = () => {
  const [progressData] = useState([
    { date: "2025-01-01", weight: 150 },
    { date: "2025-01-15", weight: 160 },
    { date: "2025-02-01", weight: 170 },
  ]);

  return (
    <div>
      <h1>Progress</h1>
      <ProgressChart data={progressData} />
    </div>
  );
};

export default Progress;
