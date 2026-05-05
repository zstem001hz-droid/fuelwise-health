// import utilities for testing
import {
  calculateWeeklyLoad,
  generateFuelWiseResult,
  Activity
} from "./utils/fuelwiseLogic";


// Mock Data for testing. purposes
const mockActivities: Activity[] = [
  {
    id: 1,
    date: "2026-04-28",
    activityName: "Morning Run",
    activityType: "Run",
    distanceMiles: 3.1,
    durationMinutes: 30,
    averagePace: 9.5
  },
  {
    id: 2,
    date: "2026-04-30",
    activityName: "Easy Run",
    activityType: "Run",
    distanceMiles: 2.5,
    durationMinutes: 25,
    averagePace: 10.5
  },
  {
    id: 3,
    date: "2026-05-02",
    activityName: "Long Run",
    activityType: "Run",
    distanceMiles: 5.0,
    durationMinutes: 50,
    averagePace: 9.8
  }
];

import { useEffect } from "react";

// Run functions on load
useEffect(() => {
  const weekly = calculateWeeklyLoad(mockActivities);
  const result = generateFuelWiseResult(weekly);

  console.log("Weekly Data:", weekly);
  console.log("FuelWise Result:", result);
}, []);

// Display
return (
  <div>
    <h1>FuelWise Test</h1>
    <pre>{JSON.stringify(result, null, 2)}</pre>
  </div>
);
