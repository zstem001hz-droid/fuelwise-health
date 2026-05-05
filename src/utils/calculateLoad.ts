// Import types from types folder
import { Activity, WeeklySummary, RiskLevel } from "../types/strava";

// Helper function to determine intensity score based on pace 
// Faster pace = higher intensity
export function getIntensity(pace: number): number {
  if (pace <= 8) return 8;     // fast run
  if (pace <= 10) return 6;    // moderate run
  if (pace <= 12) return 4;    // easy run
  return 3;                    // very easy / recovery
}

// Calculate load for a single workout
// Load = duration × intensity
export function calculateWorkoutLoad(activity: Activity): number {
  return activity.durationMinutes * getIntensity(activity.averagePace);
}

