import "./App.css";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage.js";
import CropRecommendation from "./components/CropRecommendation.js";
import DiagnoseNow from "./components/DiagnoseNow.js";
import Homepage from "./components/Homepage.js";
import SoilMoisture from "./components/Soilmoisture.js";
import Test from "./components/About.js";
import RiceDiseasePredictor from "./components/RiceDiseasePredictor.js";
import Analysis from "./components/Analysis.js";
import AboutPage from "./components/About.js";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children : [
        {
          path : "/",
          element : <Homepage />
        },
        {
          path : "/croprecommendation",
          element : <CropRecommendation/>
        },
        {
          path : "/SoilMoisture",
          element : <SoilMoisture />
        },
        {
          path : "/analysis",
          element : <Analysis />
        },
        {
          path : "/crop-recommendation",
          element : <CropRecommendation />
        },
        {
          path : "/ricediseasepredictor",
          element : <RiceDiseasePredictor/>
        },
        {
          path : "/About",
          element : <AboutPage />
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
