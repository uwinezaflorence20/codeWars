import { useState } from "react";

const TwoStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [submittedData, setSubmittedData] = useState(null);

  // Handle email input
  const handleEmailChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  // Handle password input
  const handlePasswordChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  // Navigation
  const goToNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const goToPreviousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Submit form
  const handleSubmit = () => {
    // 1. Save submitted data
    setSubmittedData(formData);

    // 2. Clear form
    setFormData({
      email: "",
      password: "",
    });

    // 3. Go back to step 1
    setCurrentStep(1);
  };

  // Reset submission
  const resetSubmission = () => {
    setSubmittedData(null);
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
      {/* Display submitted data */}
      {submittedData && (
        <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
          <h3 className="text-lg font-bold text-green-800 mb-2">
            Form Submitted Successfully!
          </h3>
          <div className="text-green-700">
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Password:</strong> {submittedData.password}
            </p>
          </div>
          <button
            onClick={resetSubmission}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Fill Form Again
          </button>
        </div>
      )}

      {/* Step 1 */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Step 1. Provide email
          </h2>

          <input
            type="email"
            value={formData.email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            className="w-full mb-6 px-3 py-2 border rounded"
          />

          <button
            onClick={goToNextStep}
            className="w-full px-4 py-2 bg-blue-600 text-white rounded"
          >
            Next Step
          </button>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">
            Step 2. Provide password
          </h2>

          <input
            type="password"
            value={formData.password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            className="w-full mb-6 px-3 py-2 border rounded"
          />

          <div className="flex gap-3">
            <button
              onClick={goToPreviousStep}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded"
            >
              Previous
            </button>

            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 bg-green-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Step indicator */}
      <div className="mt-6 flex justify-center space-x-2">
        <div
          className={`w-3 h-3 rounded-full ${
            currentStep === 1 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full ${
            currentStep === 2 ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default TwoStepForm;