const CropRecommendation = () => {
  return (
    <div>
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Agricultural Intelligence System</h1>
          <p className="text-lg">Helping farmers make data-driven decisions</p>
        </div>
      </header>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-12 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-green-700 mb-8 text-center font-poppins">
        🌾 Crop Recommendation System
      </h2>

      <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-[1.01] shadow-[0_20px_50px_rgba(0,128,0,0.15)] hover:shadow-[0_25px_65px_rgba(0,128,0,0.25)]" style={{ height: "600px" }}>
        <iframe
          src="https://mervismas-crop-reccomendation.hf.space"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-[1200px] rounded-3xl"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>
  );
};

export default CropRecommendation;
