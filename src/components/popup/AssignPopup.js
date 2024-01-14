import React from "react";

const AssignPopup = ({ onClose}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto">
    <div className="fixed inset-0 bg-black opacity-70"></div>

    <div className="relative bg-white p-8 rounded-lg shadow-md z-10">
      <h2 className="text-2xl mb-4 text-gray-800 flex justify-center outline-none">
        Assign Detail
      </h2>

      <div className="flex items-center justify-between">
        <label className="text-gray-800 py-2 w-36">Assign To :</label>

        <input
          type="text"
          placeholder="Assinee name"
          className="border px-4 py-2 w-full rounded-md no-outline text-gray-800"
        //   onChange={(e) => {
        //     const inputTime = e.target.value;
        //     setNewEndTime(inputTime);
        //   }}
        />
      </div>

      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        //   onClick={handleSave}
        >
          Save
        </button>

        <button
          className="px-4 py-2 ml-4 text-white bg-red-500 rounded hover-bg-red-600"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
  );
};

export default AssignPopup;
