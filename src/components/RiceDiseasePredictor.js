import { useState } from "react";
import YoloV8 from "./YoloV8.js";
import YoloV9 from "./YoloV9.js";
import CNN_Model from "./CNN_Model";
import Deceptron from "./Deceptron.js";

const Test = () => {
  const [selectedModel, setSelectedModel] = useState("yolov8");

  const renderComponent = () => {
    switch (selectedModel) {
      case "yolov9":
        return <YoloV9 />;
      case "CNN-Model":
        return <CNN_Model />;
      case "deceptron":
        return <Deceptron />;
      case "yolov8":
      default:
        return <YoloV8 />;
    }
  };

  return (
    <div>
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Agricultural Intelligence System</h1>
          <p className="text-lg">Helping farmers make data-driven decisions</p>
        </div>
      </header>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
      <div
        className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 transform transition-transform duration-300 hover:scale-[1.02]"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-6">
          Select Model for Testing
        </h1>

        {/* Dropdown */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="text-green-700 font-semibold border border-green-300 bg-white rounded-full px-6 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200 ease-in-out"
          >
            <option value="yolov8">YOLOv8</option>
            <option value="yolov9">YOLOv9</option>
            <option value="CNN-Model">CNN Model</option>
            <option value="deceptron">Detectron2</option>
          </select>
        </div>

        {/* Render selected model */}
        <div className="w-full">
          {renderComponent()}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Test;
