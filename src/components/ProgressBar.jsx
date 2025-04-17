import { useState, useEffect } from "react";

const ProgressBar = ({ label, value, color = "bg-purple-600" }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWidth(value);
    }, 100);
    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-lg">{label}</span>
        <small className="font-medium text-lg">{value}%</small>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
