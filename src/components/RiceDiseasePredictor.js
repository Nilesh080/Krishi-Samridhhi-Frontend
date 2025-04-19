import { useState } from "react";
import YoloV8 from "./YoloV8.js";
import YoloV9 from "./YoloV9.js";
import Deceptron from "./Deceptron.js";

const Test = () => {
  const [selectedModel, setSelectedModel] = useState("yolov8");

  const renderComponent = () => {
    switch (selectedModel) {
      case "yolov9":
        return <YoloV9 />;
      case "deceptron":
        return <Deceptron />;
      case "yolov8":
      default:
        return <YoloV8 />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 flex flex-col items-center">
      {/* Centered Dropdown */}
      <div className="mb-10">
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="text-green-700 font-semibold border border-green-300 bg-white rounded-2xl px-6 py-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
        >
          <option value="yolov8">YOLOv8</option>
          <option value="yolov9">YOLOv9</option>
          <option value="deceptron">Deceptron</option>
        </select>
      </div>

      {/* Render selected model */}
      <div className="w-full">{renderComponent()}</div>
    </div>
  );
};

export default Test;
