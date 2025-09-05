"use client";

import React from "react";
import { Bed, Activity, Droplet, Smile, Zap } from "lucide-react";

interface WellnessData {
  sleep: number;
  mood: number;
  energy: number;
  water: number;
  steps: number;
}

type Tier = "basic" | "light" | "pro";

interface DailyWellnessScoreProps {
  wellnessData: WellnessData;
  /** Subscription tier – shows the upgrade button for basic tier */
  tier?: Tier; // Make tier optional or provide a default
}

const clampValue = (value: number) =>
  Math.min(100, Math.max(0, Math.round(value)));

export const DailyWellnessScore: React.FC<DailyWellnessScoreProps> = ({
  wellnessData,
  tier = "basic", // Default to basic tier
}) => {
  const calculateSleepScore = (sleepHours: number) => {
    if (sleepHours >= 7 && sleepHours <= 9) return 100; // Optimum
    if (sleepHours >= 6 && sleepHours < 7) return 40 + (sleepHours - 6) * 20; // 40-60%
    if (sleepHours >= 4 && sleepHours < 6) return 20 + (sleepHours - 4) * 10; // 20-40%
    if (sleepHours > 0 && sleepHours < 4) return sleepHours * 5; // 0-20%
    if (sleepHours > 9) return Math.max(80, 100 - (sleepHours - 9) * 5); // Gradual decrease from 100 to 80
    return 0;
  };

  const calculateMoodScore = (moodValue: number) => {
    switch (moodValue) {
      case 1:
        return 0;
      case 2:
        return 25;
      case 3:
        return 50;
      case 4:
        return 75;
      case 5:
        return 100;
      default:
        return 0;
    }
  };

  const calculateEnergyScore = (energyValue: number) => {
    switch (energyValue) {
      case 1:
        return 0;
      case 2:
        return 25;
      case 3:
        return 50;
      case 4:
        return 75;
      case 5:
        return 100;
      default:
        return 0;
    }
  };

  const calculateWaterScore = (waterMl: number) => {
    if (waterMl >= 1500 && waterMl <= 2500) return 100; // Optimum
    if (waterMl >= 500 && waterMl < 1500) return 10 + (waterMl - 500) * 0.04; // 10-50%
    if (waterMl > 0 && waterMl < 500) return waterMl * 0.02; // 0-10%
    if (waterMl > 2500) return 100; // No decrease
    return 0;
  };

  const calculateStepsScore = (steps: number) => {
    if (steps >= 8000 && steps <= 12000) return 100;
    if (steps >= 5000 && steps < 8000) return 40 + (steps - 5000) * 0.01; // 40-70%
    if (steps >= 2000 && steps < 5000) return 20 + (steps - 2000) * 0.0066; // 20-40%
    if (steps > 0 && steps < 2000) return steps * 0.01; // 0-20%
    if (steps > 12000) return 100; // No decrease
    return 0;
  };

  const sleepScore = calculateSleepScore(wellnessData.sleep || 0);
  const moodScore = calculateMoodScore(wellnessData.mood || 0);
  const energyScore = calculateEnergyScore(wellnessData.energy || 0);
  const waterScore = calculateWaterScore(wellnessData.water || 0);
  const stepsScore = calculateStepsScore(wellnessData.steps || 0);

  const overallScore = Math.round(
    (sleepScore + moodScore + energyScore + waterScore + stepsScore) / 5
  );

  const categories = {
    sleep: sleepScore,
    mood: moodScore,
    energy: energyScore,
    water: waterScore,
    steps: stepsScore,
  };
  const getMotivationalPhrase = (score: number) => {
    if (score >= 80) return "Прекрасное начало! Вы на верном пути.";
    if (score >= 60) return "Отличный прогресс! Продолжайте в том же духе.";
    return "Каждый шаг важен! Давайте улучшим ваш день.";
  };

  const getScoreTextColor = (score: number) => {
    if (score >= 80) return "text-emerald-600";
    if (score >= 60) return "text-green-500";
    if (score >= 30) return "text-amber-500";
    return "text-slate-500";
  };

  const categoryItems = [
    {
      name: "Сон",
      icon: <Bed className="w-4 h-4" />,
      value: categories.sleep,
      color: "bg-blue-200",
      progressColor: "bg-blue-500",
    },
    {
      name: "Настроение",
      icon: <Smile className="w-4 h-4" />,
      value: categories.mood,
      color: "bg-yellow-200",
      progressColor: "bg-yellow-500",
    },
    {
      name: "Энергия",
      icon: <Zap className="w-4 h-4" />,
      value: categories.energy,
      color: "bg-purple-200",
      progressColor: "bg-purple-500",
    },
    {
      name: "Вода",
      icon: <Droplet className="w-4 h-4" />,
      value: categories.water,
      color: "bg-cyan-200",
      progressColor: "bg-cyan-500",
    },
    {
      name: "Шаги",
      icon: <Activity className="w-4 h-4" />,
      value: categories.steps,
      color: "bg-orange-200",
      progressColor: "bg-orange-500",
    },
  ];

  return (
    <section className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform scale-100">
      <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
        Ваш прогресс сегодня
      </h2>

      <div className="flex flex-col items-center mb-6">
        <span
          className={`font-bold text-6xl transition-colors duration-500 ${getScoreTextColor(
            overallScore
          )}`}
        >
          {overallScore}%
        </span>
        <p className="text-slate-600 text-lg mt-2">
          {getMotivationalPhrase(overallScore)}
        </p>
        <div className="flex gap-2 mt-4">
          {categoryItems.map((cat) => (
            <div
              key={cat.name}
              className={`w-8 h-2 rounded-full ${cat.progressColor}`}
              style={{ width: `${(cat.value / 100) * 32}px` }} // Max width 32px for 100%
            ></div>
          ))}
        </div>
      </div>

      <div className="w-full space-y-4 mb-6">
        {categoryItems.map((cat) => (
          <div key={cat.name} className="flex items-center gap-4">
            <span className="text-xl">{cat.icon}</span>
            <div className="flex-1">
              <div className="flex justify-between text-sm text-slate-700 mb-1">
                <span>{cat.name}</span>
                <span>{cat.value}%</span>
              </div>
              <div className={`w-full ${cat.color} rounded-full h-2.5`}>
                <div
                  className={`${cat.progressColor} h-2.5 rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${cat.value}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {tier === "basic" && (
        <button className="mt-6 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition">
          Улучшить подписку
        </button>
      )}
    </section>
  );
};

export default DailyWellnessScore;
