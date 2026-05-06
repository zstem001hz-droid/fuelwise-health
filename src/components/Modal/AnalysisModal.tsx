// type definitions for the AnalysisModal component
// this type is responsible for defining the props that the AnalysisModal component will receive. In this case, it expects a single prop called onClose, which is a function that takes no arguments and returns void. This function will be used to close the modal when the user clicks the cancel button or submits the form.
type AnalysisModalProps = {
  onClose: () => void;
};

export default function AnalysisModal({ onClose }: AnalysisModalProps) {
 
  return (
    // Modal overlay
    <div className="flex items-start z-50 justify-center bg-slate-700/50 fixed inset-0 backdrop-blur-sm px-6 overflow-y-auto py-10">
      {/* Modal content------------------------------------------------------------------ */}
      <div>
        <form className="flex flex-col bg-white shadow-xl rounded-lg p-6 gap-7 w-full max-w-md">
          {/* Header copy for the analysis form ---------------------------------------*/}
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-2xl font-semibold">Analyze Your Training</h2>
            <p className="text-sm text-gray-600">
              Get personalized insights based on your training load, recovery,
              and workout intensity.
            </p>
          </div>

          {/* Core training inputs-------------------------------------------------- */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label htmlFor="age" className="text-sm font-medium">
                Age
              </label>
              <input
                type="number"
                placeholder="e.g. 26"
                id="age"
                name="age"
                className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black"
              />
            </div>

            {/* WEEKLY MILEAGE --------------------------------------------------- */}
            <div className="flex flex-col gap-2">
              <label htmlFor="weekly-mileage" className="text-sm font-medium">
                Weekly Mileage
              </label>
              <input
                type="number"
                placeholder="e.g. 30 miles"
                id="weekly-mileage"
                name="weekly-mileage"
                className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black"
              />
            </div>

            {/* TRAINING INTENSITY --------------------------------------------------- */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="training-intensity"
                className="text-sm font-medium"
              >
                Training Intensity:
              </label>

              <p className="text-sm text-gray-500">
                Estimate how demanding your recent workouts have been overall.
              </p>

              <select
                id="training-intensity"
                name="training-intensity"
                className="border border-gray-300 rounded-md px-4 py-3 bg-white text-sm outline-none transition focus:ring-2 focus:ring-black/20 focus:border-black"
              >
                <option value="">Select intensity</option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>

            {/* RECOVERY LEVEL --------------------------------------------------- */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="recovery-slider"
                  className="text-sm font-medium"
                >
                  Recovery Level
                </label>

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
                className="w-full accent-black"
              />

              <div className="flex gap-2 justify-between text-xs text-gray-400">
                <span>Fatigued</span>
                <span>Fully Recovered</span>
              </div>
            </div>
          </div>

          {/* Action buttons --------------------------------------------------- */}
          <div className="flex flex-col gap-3">
            <button
              type="submit"
              className="mt-4 bg-gray-700 text-white rounded-md py-3 font-medium transition hover:bg-gray-900"
            >
              Analyze
            </button>

            <button
              type="button"
              onClick={onClose}
              className="border border-gray-300 bg-white text-gray-700 rounded-md py-3 font-medium transition hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
