export function AnalysisModal() {
  return (
    // Modal overlay
    <div>
      // Dialog panel
      <div>
        <form>
          {/* Header copy for the analysis form */}
          <div>
            <h2></h2>
            <p></p>
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
        </form>
      </div>
    </div>
  );
}
