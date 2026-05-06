export default function AnalysisModal() {
  return (
    // Modal overlay
    <div className="flex items-center justify-center bg-slate-700/50 fixed inset-0 backdrop-blur-sm">
      {/* Modal content */}
      <div>
        <form className="flex flex-col bg-amber-50 rounded-lg p-6 gap-7 md:w-full max-w-sm md:max-w-md">
          {/* Header copy for the analysis form */}
          <div>
            <h2>Analyze Your Training</h2>
            <p>
              Get personalized insights based on your training load, recovery,
              and workout intensity.
            </p>
          </div>

          {/* Core training inputs */}
          <div>
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" />
          </div>

          <div>
            <label htmlFor="weekly-mileage">Weekly Mileage</label>
            <input type="number" id="weekly-training" name="weekly-mileage" />
          </div>

          <div>
            <label htmlFor="training-intensity">Training Intensity:</label>
            <select id="training-intensity" name="training-intensity">
              <option value="">Select intensity</option>
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <label htmlFor="recovery-slider">Recovery Level</label>

              <span className="text-sm font-medium">5/10</span>
            </div>

            <p className="text-sm text-gray-500">
              Rate how recovered your body currently feels after recent training
              sessions.
            </p>

            <input
              type="range"
              id="recovery-slider"
              name="recovery-slider"
              min="1"
              max="10"
            />

            <div className="flex justify-between text-xs text-gray-400">
              <span>Fatigued</span>
              <span>Fully Recovered</span>
            </div>
          </div>

          <button type="submit" role="button">
            Analyze
          </button>
        </form>
      </div>
    </div>
  );
}
