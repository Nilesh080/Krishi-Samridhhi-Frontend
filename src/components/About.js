import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("crop");

  // Sample model comparison data for chart
  const modelComparisonData = [
    {
      name: "Random Forest",
      accuracy: 99.32,
      precision: 99.37,
      recall: 99.32,
      f1Score: 99.32,
    },
    {
      name: "SVM",
      accuracy: 96.14,
      precision: 96.73,
      recall: 96.14,
      f1Score: 96.12,
    },
    {
      name: "KNN",
      accuracy: 97.05,
      precision: 97.4,
      recall: 97.05,
      f1Score: 97.03,
    },
    {
      name: "Logistic Regression",
      accuracy: 95.23,
      precision: 95.42,
      recall: 95.23,
      f1Score: 95.24,
    },
  ];

  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            Agricultural Intelligence System
          </h1>
          <p className="text-lg">Helping farmers make data-driven decisions</p>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="container mx-auto mt-6 px-4">
        <div className="flex border-b border-green-300">
          <button
            className={`px-4 py-2 font-medium text-lg ${
              activeTab === "crop"
                ? "text-green-800 border-b-2 border-green-600"
                : "text-green-600"
            }`}
            onClick={() => setActiveTab("crop")}
          >
            Crop Recommendation
          </button>
          <button
            className={`px-4 py-2 font-medium text-lg ${
              activeTab === "disease"
                ? "text-green-800 border-b-2 border-green-600"
                : "text-green-600"
            }`}
            onClick={() => setActiveTab("disease")}
          >
            Rice Disease Detection
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8 px-4">
        {activeTab === "crop" ? (
          <CropRecommendationSection />
        ) : (
          <DiseaseDectionSection />
        )}
      </div>
    </div>
  );
}

function CropRecommendationSection() {
  const modelComparisonData = [
    {
      name: "Random Forest",
      accuracy: 99.32,
      precision: 99.37,
      recall: 99.32,
      f1Score: 99.32,
    },
    {
      name: "SVM",
      accuracy: 96.14,
      precision: 96.73,
      recall: 96.14,
      f1Score: 96.12,
    },
    {
      name: "KNN",
      accuracy: 97.05,
      precision: 97.4,
      recall: 97.05,
      f1Score: 97.03,
    },
    {
      name: "Logistic Regression",
      accuracy: 95.23,
      precision: 95.42,
      recall: 95.23,
      f1Score: 95.24,
    },
  ];
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Crop Recommendation System
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            1. Data Collection
          </h3>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <div className="bg-green-100 p-4 rounded-lg mb-4 h-96 flex items-center justify-center">
                <img
                  src="/assets/images/data_collection.jpg"
                  alt="Collecting data for crop recommendation"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-700">
                Our system uses comprehensive soil and environmental data to
                make accurate crop recommendations for farmers. This includes
                soil nutrient levels (N, P, K), weather conditions, and
                historical crop performance.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h4 className="font-medium text-green-700 mb-2">
                Dataset Information
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-green-200">
                  <caption className="caption-top text-sm text-green-800 mb-2">
                    Dataset Information
                  </caption>
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-4 py-2 border border-green-200">
                        Parameter
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Non-Null Count
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Dtype
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">N</td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        int64
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">P</td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        int64
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">K</td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        int64
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        temperature
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        float64
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        humidity
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        float64
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">ph</td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        float64
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        rainfall
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        float64
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        label
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2200
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        object
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            2. Dataset Analysis
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 overflow-x-auto">
              <h4 className="font-medium text-green-700 mb-2">
                Dataset Description
              </h4>
              <table className="min-w-full bg-white border border-green-200">
                <caption className="caption-top text-sm text-green-800 mb-2">
                  Dataset Description
                </caption>
                <thead>
                  <tr className="bg-green-100">
                    <th className="px-3 py-2 border border-green-200">
                      Statistic
                    </th>
                    <th className="px-3 py-2 border border-green-200">N</th>
                    <th className="px-3 py-2 border border-green-200">P</th>
                    <th className="px-3 py-2 border border-green-200">K</th>
                    <th className="px-3 py-2 border border-green-200">
                      Temperature
                    </th>
                    <th className="px-3 py-2 border border-green-200">
                      Humidity
                    </th>
                    <th className="px-3 py-2 border border-green-200">pH</th>
                    <th className="px-3 py-2 border border-green-200">
                      Rainfall
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="px-3 py-2 border border-green-200">count</td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                    <td className="px-3 py-2 border border-green-200">
                      2200.0
                    </td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-3 py-2 border border-green-200">mean</td>
                    <td className="px-3 py-2 border border-green-200">50.55</td>
                    <td className="px-3 py-2 border border-green-200">53.36</td>
                    <td className="px-3 py-2 border border-green-200">48.1</td>
                    <td className="px-3 py-2 border border-green-200">25.61</td>
                    <td className="px-3 py-2 border border-green-200">71.4</td>
                    <td className="px-3 py-2 border border-green-200">6.4</td>
                    <td className="px-3 py-2 border border-green-200">
                      103.46
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border border-green-200">std</td>
                    <td className="px-3 py-2 border border-green-200">36.91</td>
                    <td className="px-3 py-2 border border-green-200">32.89</td>
                    <td className="px-3 py-2 border border-green-200">50.84</td>
                    <td className="px-3 py-2 border border-green-200">5.06</td>
                    <td className="px-3 py-2 border border-green-200">22.2</td>
                    <td className="px-3 py-2 border border-green-200">3.07</td>
                    <td className="px-3 py-2 border border-green-200">54.98</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-3 py-2 border border-green-200">min</td>
                    <td className="px-3 py-2 border border-green-200">0.0</td>
                    <td className="px-3 py-2 border border-green-200">5.0</td>
                    <td className="px-3 py-2 border border-green-200">5.0</td>
                    <td className="px-3 py-2 border border-green-200">8.82</td>
                    <td className="px-3 py-2 border border-green-200">14.25</td>
                    <td className="px-3 py-2 border border-green-200">3.5</td>
                    <td className="px-3 py-2 border border-green-200">20.21</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border border-green-200">25%</td>
                    <td className="px-3 py-2 border border-green-200">21.0</td>
                    <td className="px-3 py-2 border border-green-200">28.0</td>
                    <td className="px-3 py-2 border border-green-200">20.0</td>
                    <td className="px-3 py-2 border border-green-200">22.76</td>
                    <td className="px-3 py-2 border border-green-200">66.26</td>
                    <td className="px-3 py-2 border border-green-200">5.7</td>
                    <td className="px-3 py-2 border border-green-200">64.55</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-3 py-2 border border-green-200">50%</td>
                    <td className="px-3 py-2 border border-green-200">37.0</td>
                    <td className="px-3 py-2 border border-green-200">51.0</td>
                    <td className="px-3 py-2 border border-green-200">28.0</td>
                    <td className="px-3 py-2 border border-green-200">25.59</td>
                    <td className="px-3 py-2 border border-green-200">80.84</td>
                    <td className="px-3 py-2 border border-green-200">6.4</td>
                    <td className="px-3 py-2 border border-green-200">94.86</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 border border-green-200">75%</td>
                    <td className="px-3 py-2 border border-green-200">84.25</td>
                    <td className="px-3 py-2 border border-green-200">68.0</td>
                    <td className="px-3 py-2 border border-green-200">48.0</td>
                    <td className="px-3 py-2 border border-green-200">28.56</td>
                    <td className="px-3 py-2 border border-green-200">89.94</td>
                    <td className="px-3 py-2 border border-green-200">6.9</td>
                    <td className="px-3 py-2 border border-green-200">
                      124.26
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="lg:w-1/2 overflow-x-auto">
              <h4 className="font-medium text-green-700 mb-2">
                Unique Crops in Dataset
              </h4>
              <table className="min-w-full bg-white border border-green-200">
                <caption className="caption-top text-sm text-green-800 mb-2">
                  Unique Crops in the Dataset
                </caption>
                <thead>
                  <tr className="bg-green-100">
                    <th className="px-4 py-2 border border-green-200">Crop</th>
                    <th className="px-4 py-2 border border-green-200">Count</th>
                    <th className="px-4 py-2 border border-green-200">Crop</th>
                    <th className="px-4 py-2 border border-green-200">Count</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">rice</td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      banana
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">maize</td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">mango</td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">
                      chickpea
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      grapes
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">
                      kidneybeans
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      watermelon
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">
                      pigeonpeas
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      muskmelon
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">
                      mothbeans
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">apple</td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">
                      mungbean
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      orange
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">
                      blackgram
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      papaya
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">
                      lentil
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      coconut
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">
                      pomegranate
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                    <td className="px-4 py-2 border border-green-200">
                      cotton
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-green-200"></td>
                    <td className="px-4 py-2 border border-green-200"></td>
                    <td className="px-4 py-2 border border-green-200">jute</td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200"></td>
                    <td className="px-4 py-2 border border-green-200"></td>
                    <td className="px-4 py-2 border border-green-200">
                      coffee
                    </td>
                    <td className="px-4 py-2 border border-green-200">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            3. Confusion Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/Logistic_Regression.png"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/KNN.png"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/SVM.png"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            4. Model Evaluation
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-green-200">
              <caption className="caption-top text-sm text-green-800 mb-2">
                Evaluation Metrics for All Models
              </caption>
              <thead>
                <tr className="bg-green-100">
                  <th className="px-4 py-2 border border-green-200">Model</th>
                  <th className="px-4 py-2 border border-green-200">
                    Accuracy (%)
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    Precision (%)
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    Recall (%)
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    F1-Score (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-green-200">
                    Random Forest
                  </td>
                  <td className="px-4 py-2 border border-green-200">99.32</td>
                  <td className="px-4 py-2 border border-green-200">99.37</td>
                  <td className="px-4 py-2 border border-green-200">99.32</td>
                  <td className="px-4 py-2 border border-green-200">99.32</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-2 border border-green-200">SVM</td>
                  <td className="px-4 py-2 border border-green-200">96.14</td>
                  <td className="px-4 py-2 border border-green-200">96.73</td>
                  <td className="px-4 py-2 border border-green-200">96.14</td>
                  <td className="px-4 py-2 border border-green-200">96.12</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">KNN</td>
                  <td className="px-4 py-2 border border-green-200">97.05</td>
                  <td className="px-4 py-2 border border-green-200">97.40</td>
                  <td className="px-4 py-2 border border-green-200">97.05</td>
                  <td className="px-4 py-2 border border-green-200">97.03</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-2 border border-green-200">
                    Logistic Regression
                  </td>
                  <td className="px-4 py-2 border border-green-200">95.23</td>
                  <td className="px-4 py-2 border border-green-200">95.42</td>
                  <td className="px-4 py-2 border border-green-200">95.23</td>
                  <td className="px-4 py-2 border border-green-200">95.24</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-medium text-green-700 mb-4">
            Model Comparison Chart
          </h4>
          <div className="h-80 bg-white p-4 rounded-lg border border-green-200">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={modelComparisonData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[90, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f0fdf4",
                    borderColor: "#16a34a",
                  }}
                />
                <Legend />
                <Bar dataKey="accuracy" name="Accuracy" fill="#16a34a" />
                <Bar dataKey="precision" name="Precision" fill="#4ade80" />
                <Bar dataKey="recall" name="Recall" fill="#86efac" />
                <Bar dataKey="f1Score" name="F1-Score" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 bg-green-100 p-4 rounded-lg h-96 flex items-center justify-center">
            <img
              src="/assets/images/model_comp.png"
              alt="Collecting data for crop recommendation"
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function DiseaseDectionSection() {
  // Sample model comparison data for chart
  const diseaseModelComparisonData = [
    {
      name: "CNN",
      accuracy: 97.85,
      precision: 97.92,
      recall: 97.85,
      f1Score: 97.84,
    },
    {
      name: "ResNet50",
      accuracy: 98.76,
      precision: 98.83,
      recall: 98.76,
      f1Score: 98.77,
    },
    {
      name: "VGG16",
      accuracy: 96.53,
      precision: 96.71,
      recall: 96.53,
      f1Score: 96.52,
    },
    {
      name: "EfficientNet",
      accuracy: 99.14,
      precision: 99.21,
      recall: 99.14,
      f1Score: 99.15,
    },
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold text-green-800 mb-6">
          Rice Disease Detection System
        </h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            1. Data Collection
          </h3>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/2">
              <h4 className="font-medium text-green-700 mb-2">
                Dataset Information
              </h4>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-green-200">
                  <caption className="caption-top text-sm text-green-800 mb-2">
                    Rice Disease Dataset Information
                  </caption>
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-4 py-2 border border-green-200">
                        Class Name
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Bacterial Leaf Blight
                      </td>
                      <td className="px-4 py-2 border border-green-200">250</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Brown Spot
                      </td>
                      <td className="px-4 py-2 border border-green-200">271</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Healthy
                      </td>
                      <td className="px-4 py-2 border border-green-200">274</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Leaf Blast
                      </td>
                      <td className="px-4 py-2 border border-green-200">271</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Leaf Scald
                      </td>
                      <td className="px-4 py-2 border border-green-200">213</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Narrow Brown Spot
                      </td>
                      <td className="px-4 py-2 border border-green-200">272</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200 font-semibold">
                        Total
                      </td>
                      <td className="px-4 py-2 border border-green-200 font-semibold">
                        1551
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            2. Disease Characteristics
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-green-200">
              <caption className="caption-top text-sm text-green-800 mb-2">
                Rice Disease Characteristics
              </caption>
              <thead>
                <tr className="bg-green-100">
                  <th className="px-4 py-2 border border-green-200">Disease</th>
                  <th className="px-4 py-2 border border-green-200">
                    Visual Characteristics
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    Causal Agent
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    Impact on Yield
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-green-200">
                    Bacterial Leaf Blight
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Yellow to white water-soaked streaks, turning grayish-white
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Xanthomonas oryzae
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    20-50% loss
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">
                    Brown Spot
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Brown oval lesions with gray centers
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Cochliobolus miyabeanus
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    10-45% loss
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">
                    Leaf Blast
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Diamond-shaped lesions with gray centers and brown borders
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Magnaporthe oryzae
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    10-80% loss
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">
                    Leaf Scald
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Irregular lesions with light centers and dark brown margins
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Microdochium oryzae
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Variable loss
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">
                    Narrow Brown Spot
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Narrow brown lesions mostly on leaf blades
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Cercospora oryzae
                  </td>
                  <td className="px-4 py-2 border border-green-200">
                    Low to moderate loss
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">Healthy</td>
                  <td className="px-4 py-2 border border-green-200">
                    Green, uniform, no visible lesions
                  </td>
                  <td className="px-4 py-2 border border-green-200">None</td>
                  <td className="px-4 py-2 border border-green-200">
                    No impact
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/bacterial_leaf_blight (310).jpg"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/brown_spot (205).jpg"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/leaf_blast_val (16).jpg"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/leaf_scald_val (13).jpg"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/narrow_brown (54).jpg"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/healthy_val (1).jpg"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            3. Model Architecture
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h4 className="font-medium text-green-700 mb-2">
                CNN Architecture
              </h4>
              <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
                <img
                  src="/assets/images/CNN_Accuracy.jpg"
                  alt="Collecting data for crop recommendation"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-green-700 mb-2">
                  Model Parameters
                </h5>
                <table className="min-w-full bg-white border border-green-200">
                  <caption className="caption-top text-sm text-green-800 mb-2">
                    CNN Model Parameters
                  </caption>
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-4 py-2 border border-green-200">
                        Layer
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Parameters
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Conv2D (1)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        16 filters, 3×3 kernel
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        MaxPooling2D (1)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2×2 pool size
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Conv2D (2)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        32 filters, 3×3 kernel
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        MaxPooling2D (2)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2×2 pool size
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Conv2D (3)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        64 filters, 3×3 kernel
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        MaxPooling2D (3)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2×2 pool size
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Flatten
                      </td>
                      <td className="px-4 py-2 border border-green-200">-</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Dense (1)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        128 units, ReLU
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Dense (2)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        4 units, Softmax
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="font-medium text-green-700 mb-2">
                Training Process
              </h4>
              <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
                <img
                  src="/assets/images/CNN_sumary.jpg"
                  alt="Collecting data for crop recommendation"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-green-700 mb-2">
                  Training Configuration
                </h5>
                <table className="min-w-full bg-white border border-green-200">
                  <caption className="caption-top text-sm text-green-800 mb-2">
                    Training Configuration
                  </caption>
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-4 py-2 border border-green-200">
                        Parameter
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Optimizer
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        Adam
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Learning Rate
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        0.001
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Batch Size
                      </td>
                      <td className="px-4 py-2 border border-green-200">32</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Epochs
                      </td>
                      <td className="px-4 py-2 border border-green-200">50</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Data Split
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        80% train, 10% validation, 10% test
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Augmentation
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        Rotation, zoom, flip, shift
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Early Stopping
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        Patience = 10
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            3. Model Architecture
          </h3>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h4 className="font-medium text-green-700 mb-2">
                CNN Architecture
              </h4>
              <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
                <img
                  src="/assets/images/CNN_Accuracy.jpg"
                  alt="Collecting data for crop recommendation"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-green-700 mb-2">
                  Model Parameters
                </h5>
                <table className="min-w-full bg-white border border-green-200">
                  <caption className="caption-top text-sm text-green-800 mb-2">
                    CNN Model Parameters
                  </caption>
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-4 py-2 border border-green-200">
                        Layer
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Parameters
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Conv2D (1)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        16 filters, 3×3 kernel
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        MaxPooling2D (1)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2×2 pool size
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Conv2D (2)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        32 filters, 3×3 kernel
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        MaxPooling2D (2)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2×2 pool size
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Conv2D (3)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        64 filters, 3×3 kernel
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        MaxPooling2D (3)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        2×2 pool size
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Flatten
                      </td>
                      <td className="px-4 py-2 border border-green-200">-</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Dense (1)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        128 units, ReLU
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Dense (2)
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        4 units, Softmax
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* New table: Rice Crop Disease Classification */}
              <div className="mt-6">
                <h5 className="font-medium text-green-700 mb-2">
                  CNN Classification Performance
                </h5>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-green-200">
                    <caption className="caption-top text-sm text-green-800 mb-2">
                      Rice Crop Disease Classification using CNN
                    </caption>
                    <thead>
                      <tr className="bg-green-100">
                        <th className="px-4 py-2 border border-green-200">Metric</th>
                        <th className="px-4 py-2 border border-green-200">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-green-200">Final Training Accuracy</td>
                        <td className="px-4 py-2 border border-green-200">0.9210</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-2 border border-green-200">Final Validation Accuracy</td>
                        <td className="px-4 py-2 border border-green-200">0.9129</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-green-200">Final Training Loss</td>
                        <td className="px-4 py-2 border border-green-200">0.2626</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-2 border border-green-200">Final Validation Loss</td>
                        <td className="px-4 py-2 border border-green-200">0.3364</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h4 className="font-medium text-green-700 mb-2">
                Training Process
              </h4>
              <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
                <img
                  src="/assets/images/CNN_sumary.jpg"
                  alt="Collecting data for crop recommendation"
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h5 className="font-medium text-green-700 mb-2">
                  Training Configuration
                </h5>
                <table className="min-w-full bg-white border border-green-200">
                  <caption className="caption-top text-sm text-green-800 mb-2">
                    Training Configuration
                  </caption>
                  <thead>
                    <tr className="bg-green-100">
                      <th className="px-4 py-2 border border-green-200">
                        Parameter
                      </th>
                      <th className="px-4 py-2 border border-green-200">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Optimizer
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        Adam
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Learning Rate
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        0.001
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Batch Size
                      </td>
                      <td className="px-4 py-2 border border-green-200">32</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Epochs
                      </td>
                      <td className="px-4 py-2 border border-green-200">50</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Data Split
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        80% train, 10% validation, 10% test
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-2 border border-green-200">
                        Augmentation
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        Rotation, zoom, flip, shift
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-green-200">
                        Early Stopping
                      </td>
                      <td className="px-4 py-2 border border-green-200">
                        Patience = 10
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* New table: Object Detection Models */}
              <div className="mt-6">
                <h5 className="font-medium text-green-700 mb-2">
                  Object Detection Performance
                </h5>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-green-200">
                    <caption className="caption-top text-sm text-green-800 mb-2">
                      Performance Metrics for Object Detection Models
                    </caption>
                    <thead>
                      <tr className="bg-green-100">
                        <th className="px-4 py-2 border border-green-200">Model</th>
                        <th className="px-4 py-2 border border-green-200">Precision</th>
                        <th className="px-4 py-2 border border-green-200">Recall</th>
                        <th className="px-4 py-2 border border-green-200">mAP50</th>
                        <th className="px-4 py-2 border border-green-200">mAP50-95</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-green-200">YOLOv8s</td>
                        <td className="px-4 py-2 border border-green-200">0.937</td>
                        <td className="px-4 py-2 border border-green-200">0.912</td>
                        <td className="px-4 py-2 border border-green-200">0.952</td>
                        <td className="px-4 py-2 border border-green-200">0.643</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-2 border border-green-200">YOLOv9s</td>
                        <td className="px-4 py-2 border border-green-200">0.943</td>
                        <td className="px-4 py-2 border border-green-200">0.935</td>
                        <td className="px-4 py-2 border border-green-200">0.964</td>
                        <td className="px-4 py-2 border border-green-200">0.648</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-green-200">Detectron2</td>
                        <td className="px-4 py-2 border border-green-200">0.4613</td>
                        <td className="px-4 py-2 border border-green-200">0.532</td>
                        <td className="px-4 py-2 border border-green-200">0.7334</td>
                        <td className="px-4 py-2 border border-green-200">0.4613</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-green-700 mb-4">
            4. Model Evaluation
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white border border-green-200">
              <caption className="caption-top text-sm text-green-800 mb-2">
                Evaluation Metrics for All Models
              </caption>
              <thead>
                <tr className="bg-green-100">
                  <th className="px-4 py-2 border border-green-200">Model</th>
                  <th className="px-4 py-2 border border-green-200">
                    Accuracy (%)
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    Precision (%)
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    Recall (%)
                  </th>
                  <th className="px-4 py-2 border border-green-200">
                    F1-Score (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-green-200">CNN</td>
                  <td className="px-4 py-2 border border-green-200">97.85</td>
                  <td className="px-4 py-2 border border-green-200">97.92</td>
                  <td className="px-4 py-2 border border-green-200">97.85</td>
                  <td className="px-4 py-2 border border-green-200">97.84</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-2 border border-green-200">
                    ResNet50
                  </td>
                  <td className="px-4 py-2 border border-green-200">98.76</td>
                  <td className="px-4 py-2 border border-green-200">98.83</td>
                  <td className="px-4 py-2 border border-green-200">98.76</td>
                  <td className="px-4 py-2 border border-green-200">98.77</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-green-200">VGG16</td>
                  <td className="px-4 py-2 border border-green-200">96.53</td>
                  <td className="px-4 py-2 border border-green-200">96.71</td>
                  <td className="px-4 py-2 border border-green-200">96.53</td>
                  <td className="px-4 py-2 border border-green-200">96.52</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-4 py-2 border border-green-200">
                    EfficientNet
                  </td>
                  <td className="px-4 py-2 border border-green-200">99.14</td>
                  <td className="px-4 py-2 border border-green-200">99.21</td>
                  <td className="px-4 py-2 border border-green-200">99.14</td>
                  <td className="px-4 py-2 border border-green-200">99.15</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="font-medium text-green-700 mb-4">
            Model Comparison Chart
          </h4>
          <div className="h-80 bg-white p-4 rounded-lg border border-green-200">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={diseaseModelComparisonData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[90, 100]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f0fdf4",
                    borderColor: "#16a34a",
                  }}
                />
                <Legend />
                <Bar dataKey="accuracy" name="Accuracy" fill="#16a34a" />
                <Bar dataKey="precision" name="Precision" fill="#4ade80" />
                <Bar dataKey="recall" name="Recall" fill="#86efac" />
                <Bar dataKey="f1Score" name="F1-Score" fill="#22c55e" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <h4 className="font-medium text-green-700 mb-4">Confusion Matrix</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/Y8_confusion_matrix.png"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/Y9_confusion_matrix.png"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            <div className="bg-green-100 p-4 rounded-lg h-64 flex items-center justify-center">
              <img
                src="/assets/images/confusion_matrix_Detectron2.png"
                alt="Collecting data for crop recommendation"
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
          </div>

          {/* <div className="mt-8">
            <h4 className="font-medium text-green-700 mb-4">
              Class-wise Performance
            </h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-green-200">
                <caption className="caption-top text-sm text-green-800 mb-2">
                  Class-wise Performance (EfficientNet)
                </caption>
                <thead>
                  <tr className="bg-green-100">
                    <th className="px-4 py-2 border border-green-200">
                      Disease Class
                    </th>
                    <th className="px-4 py-2 border border-green-200">
                      Precision (%)
                    </th>
                    <th className="px-4 py-2 border border-green-200">
                      Recall (%)
                    </th>
                    <th className="px-4 py-2 border border-green-200">
                      F1-Score (%)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">
                      Healthy
                    </td>
                    <td className="px-4 py-2 border border-green-200">99.53</td>
                    <td className="px-4 py-2 border border-green-200">99.42</td>
                    <td className="px-4 py-2 border border-green-200">99.47</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">
                      Bacterial Leaf Blight
                    </td>
                    <td className="px-4 py-2 border border-green-200">98.95</td>
                    <td className="px-4 py-2 border border-green-200">99.08</td>
                    <td className="px-4 py-2 border border-green-200">99.01</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-green-200">
                      Brown Spot
                    </td>
                    <td className="px-4 py-2 border border-green-200">99.27</td>
                    <td className="px-4 py-2 border border-green-200">98.86</td>
                    <td className="px-4 py-2 border border-green-200">99.06</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-2 border border-green-200">
                      Leaf Smut
                    </td>
                    <td className="px-4 py-2 border border-green-200">98.92</td>
                    <td className="px-4 py-2 border border-green-200">99.31</td>
                    <td className="px-4 py-2 border border-green-200">99.11</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </section>

      {/* <section>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-4">5. Mobile Application Integration</h3>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div className="bg-green-100 p-4 rounded-lg mb-4 h-96 flex items-center justify-center">
                <img
                  src="/assets/images/Mobile_View.png"
                  alt="Collecting data for crop recommendation"
                  className="w-full h-full object-contain rounded-lg"
                />
                </div>
                <p className="text-gray-700">
                  Our system is deployed through a user-friendly mobile application that allows farmers to take photos of rice plants
                  and get instant disease detection results. The application provides not only the diagnosis but also recommended
                  treatment options specific to the detected disease.
                </p>
              </div>
              <div className="lg:w-1/2">
                <h4 className="font-medium text-green-700 mb-2">Treatment Recommendations</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-green-200">
                    <caption className="caption-top text-sm text-green-800 mb-2">Disease Treatment Recommendations</caption>
                    <thead>
                      <tr className="bg-green-100">
                        <th className="px-4 py-2 border border-green-200">Disease</th>
                        <th className="px-4 py-2 border border-green-200">Treatment Options</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border border-green-200">Bacterial Leaf Blight</td>
                        <td className="px-4 py-2 border border-green-200">
                          <ul className="list-disc pl-5">
                            <li>Use disease-resistant rice varieties</li>
                            <li>Apply copper-based bactericides</li>
                            <li>Ensure proper drainage in fields</li>
                            <li>Remove and destroy infected plants</li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="px-4 py-2 border border-green-200">Brown Spot</td>
                        <td className="px-4 py-2 border border-green-200">
                          <ul className="list-disc pl-5">
                            <li>Apply fungicides (propiconazole, hexaconazole)</li>
                            <li>Maintain balanced soil fertility</li>
                            <li>Use certified disease-free seeds</li>
                            <li>Practice crop rotation</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 border border-green-200">Leaf Smut</td>
                        <td className="px-4 py-2 border border-green-200">
                          <ul className="list-disc pl-5">
                            <li>Apply fungicides (propiconazole)</li>
                            <li>Control excess nitrogen application</li>
                            <li>Improve field drainage</li>
                            <li>Remove weed hosts</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section> */}
    </div>
  );
}
