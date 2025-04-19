const YoloV9 = () => {
  return (
    <div
      className="relative w-full mt-10 rounded-md shadow-lg max-w-5xl mx-auto overflow-hidden"
      style={{ height: "700px" }} // Slightly taller container
    >
      <iframe
        src="https://mervismas-rice-crop-detection-yolov9.hf.space"
        className="absolute top-0 left-0 w-full h-[950px] rounded-md"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default YoloV9;
