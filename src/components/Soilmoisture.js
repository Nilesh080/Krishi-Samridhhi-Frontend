import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase, get, ref } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const SoilMoisture = () => {
  const [soilMoisture, setSoilMoisture] = useState(0);
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataRef = ref(database);
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setSoilMoisture(data.Data?.moisture1 || 0);
          setTemperature(data.Data?.temperature || '');
          setHumidity(data.Data?.humidity || '');
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const soilMoisturePercentage = soilMoisture;

  return (
    <div>
      <header className="bg-green-700 text-white p-6 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Agricultural Intelligence System</h1>
          <p className="text-lg">Helping farmers make data-driven decisions</p>
        </div>
      </header>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl p-8 space-y-8">
        <h2 className="text-3xl font-bold text-center text-green-700 font-poppins">
          🌱 Soil Moisture Monitor
        </h2>

        <div className="flex justify-center">
          <div className="w-44 h-44 md:w-56 md:h-56">
            <CircularProgressbar
              value={soilMoisturePercentage}
              text={`${Math.round(soilMoisturePercentage)}%`}
              styles={buildStyles({
                textColor: '#38a169',
                pathColor: '#38a169',
                trailColor: '#e6fffa',
                textSize: '18px',
              })}
            />
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Soil Moisture */}
            <div className="flex flex-col">
              <label htmlFor="soil-moisture" className="text-green-700 font-medium">
                Soil Moisture
              </label>
              <input
                type="number"
                id="soil-moisture"
                value={soilMoisture}
                onChange={(e) => setSoilMoisture(e.target.value)}
                className="border border-green-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="0 - 60"
              />
            </div>

            {/* Temperature */}
            <div className="flex flex-col">
              <label htmlFor="temperature" className="text-green-700 font-medium">
                Temperature (°C)
              </label>
              <input
                type="number"
                id="temperature"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                className="border border-green-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="Enter Temperature"
              />
            </div>

            {/* Humidity */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="humidity" className="text-green-700 font-medium">
                Humidity (%)
              </label>
              <input
                type="number"
                id="humidity"
                value={humidity}
                onChange={(e) => setHumidity(e.target.value)}
                className="border border-green-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-green-300 focus:outline-none"
                placeholder="Enter Humidity"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SoilMoisture;
