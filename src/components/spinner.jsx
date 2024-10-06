import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div class="spinner"></div>
      <p className="text-blue-200 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Spinner;
