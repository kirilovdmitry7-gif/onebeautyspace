"use client";

import { DailyWellnessScore } from "../../components/health/DailyWellnessScore";
import { HealthDiary } from "../../components/health/HealthDiary";
import React, { useState, useEffect } from "react";

export default function HealthPage() {
  const [wellnessData, setWellnessData] = useState({
    sleep: 0,
    mood: 0,
    energy: 0,
    water: 0,
    steps: 0,
  });
  useEffect(() => {
    // Load initial data from localStorage on mount
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("healthDiaryData");
      if (savedData) {
        const data = JSON.parse(savedData);
        setWellnessData(data);
      }
    }
  }, []);

  const updateWellnessData = (newData: typeof wellnessData) => {
    setWellnessData(newData);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-8 text-center">
          Health Dashboard
        </h1>
        <DailyWellnessScore wellnessData={wellnessData} />
        <HealthDiary data={wellnessData} onDataChange={updateWellnessData} />
      </div>
      <p className="text-xs text-slate-500 mt-8 text-center">
        <span className="font-bold text-orange-500">Disclaimer:</span> Это
        приложение не является медицинским советом.
      </p>
    </main>
  );
}
