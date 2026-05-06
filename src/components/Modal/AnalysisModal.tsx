export default function AnalysisModal() {
  return (
    // Modal overlay
    <div className="flex items-center justify-center bg-slate-700/50 fixed inset-0 backdrop-blur-sm">
        {/* Modal content */}
      <div>
        <form className="flex flex-col bg-amber-50 rounded-lg p-6 gap-4 w-96">
          {/* Header copy for the analysis form */}
          <div>
            <h2>Analyze Your Training</h2>
            <p>Get personalized insights based on your training load, recovery, and workout intensity.</p>
          </div>

          {/* Core training inputs */}
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" />

          <label htmlFor="weekly-mileage">Weekly Mileage</label>
          <input type="number" id="weekly-training" name="weekly-mileage" />

          <label htmlFor="training-intensity">Training Intensity:</label>
          <select id="training-intensity" name="training-intensity"></select>

          <label htmlFor="recovery-slider">Recovery</label>
          <input type="range" id="recovery-slider" name="recovery-slider" />

          <button type="submit" role="button">Analyze</button>
        </form>
      </div>
    </div>
  );
}
