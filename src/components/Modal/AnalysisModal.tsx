export default function AnalysisModal() {
  return (
    // Modal overlay
    <div className="flex items-center justify-center bg-slate-700/50 fixed inset-0 backdrop-blur-sm px-6">
      {/* Modal content */}
      <div>
        <form className="flex flex-col bg-white shadow-xl rounded-lg p-6 gap-7 md:w-full max-w-sm md:max-w-md">
          {/* Header copy for the analysis form */}
          <div className="flex flex-col gap-2 mb-8">
            <h2>Analyze Your Training</h2>
            <p>
              Get personalized insights based on your training load, recovery,
              and workout intensity.
            </p>
          </div>

          {/* Core training inputs */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="weekly-mileage">Weekly Mileage</label>
              <input type="number" id="weekly-training" name="weekly-mileage" className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black"/>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="training-intensity">Training Intensity:</label>
              <select id="training-intensity" name="training-intensity" className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black">
                <option value="">Select intensity</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label htmlFor="recovery-slider">Recovery Level</label>

                <span className="text-sm font-medium">5/10</span>
              </div>

              <p className="text-sm text-gray-500">
                Rate how recovered your body currently feels after recent
                training sessions.
              </p>

              <input
                type="range"
                id="recovery-slider"
                name="recovery-slider"
                min="1"
                max="10"
                className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black"
              />

              <div className="flex gap-2 justify-between text-xs text-gray-400">
                <span>Fatigued</span>
                <span>Fully Recovered</span>
              </div>
            </div>
          </div>

          <button type="submit" role="button" className="mt-4">
            Analyze
          </button>
        </form>
      </div>
    </div>
  );
}
