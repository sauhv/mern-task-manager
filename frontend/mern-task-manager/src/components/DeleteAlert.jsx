import React from "react";

const DeleteAlert = ({ content, onDelete }) => {
  return (
    <div>
      <p className="text-sm">{content}</p>

      <div className="flex justify-end mt-6">
        <button
          onClick={onDelete}
          className="text-rose-500 bg-rose-50 font-medium px-4 py-2 rounded-lg md:text-sm gap-1.5 whitespace-nowrap border border-rose-100 cursor-pointer"
        >
          Delete!
        </button>
      </div>
    </div>
  );
};

export default DeleteAlert;
