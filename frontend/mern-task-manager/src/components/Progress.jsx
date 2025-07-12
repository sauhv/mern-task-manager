import React from "react";

const Progress = ({ Progress, status }) => {
  const getColor = () => {
    switch (status) {
      case "Completed":
        return "bg-green-50 text-green-500 border border-green-500/10";
      case "In Progress":
        return "bg-cyan-50 text-cyan-500 border border-cyan-500/20";
      default:
        return "text-violet-500 bg-violet-50 border border-violet-500/10";
    }
  };

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5">
      <div
        className={`${getColor()} h-1.5 rounded-full text-center text-xs font-medium`}
        style={{ width: `${Progress}%` }}
      ></div>
    </div>
  );
};

export default Progress;
