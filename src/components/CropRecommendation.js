const CropRecommendation = () => {
  return (
    <div className="relative w-full mt-10 rounded-md shadow-lg max-w-5xl mx-auto overflow-hidden" style={{ height: "600px" }}>
      <iframe
        src="https://mervismas-crop-reccomendation.hf.space"
        frameBorder="0"
        className="absolute top-0 left-0 w-full h-[1200px] rounded-md"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CropRecommendation;
