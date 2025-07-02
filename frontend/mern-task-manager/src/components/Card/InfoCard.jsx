import React from "react";

const InfoCard = ({ label, value, color }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-2 md:w-2 h-3 md:h-5 ${color} rounded-full`} />

      <p className="text-xs md:text-[14p] text-gray-500">
        <span className="text-sm md:text-[15px] text-black font-semibold">
          {value}
        </span>{" "}
        {label}
      </p>
    </div>
  );
};

export default InfoCard;
