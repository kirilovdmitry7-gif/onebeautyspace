"use client";

import React, { useState, useEffect } from "react";
import { Bed, Activity, Droplet, Smile, ArrowRight } from "lucide-react";

type WellnessState = "welcome" | "tracking" | "completed";
type Tier = "basic" | "light" | "pro";

interface DailyWellnessScoreProps {
  /** Subscription tier – shows the upgrade button for basic tier */
  tier: Tier;
}

interface WellnessData {
  overallScore: number;
  sleep: number;
  activity: number;
  water: number;
  mood: number;
  lastUpdated: string;
}

const clampValue = (value: number) =>
  Math.min(100, Math.max(0, Math.round(value)));

export const DailyWellnessScore: React.FC<DailyWellnessScoreProps> = ({
  tier,
}) => {
  const [wellnessState, setWellnessState] = useState<WellnessState | null>(
    null
  );
  const [wellnessData, setWellnessData] = useState<WellnessData>({
    overallScore: 0,
    sleep: 0,
    activity: 0,
    water: 0,
    mood: 0,
    lastUpdated: "",
  });

  useEffect(() => {
    const progress = localStorage.getItem("wellnessProgress");
    if (progress) {
      const data: WellnessData = JSON.parse(progress);
      const today = new Date().toDateString();
      if (data.lastUpdated === today) {
        setWellnessState("completed");
      } else {
        setWellnessState("tracking");
      }
      setWellnessData(data);
    } else {
      setWellnessState("welcome");
    }
  }, []);

  if (wellnessState === null) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[400px] w-full">
        <div className="text-slate-500">Загрузка...</div>
      </section>
    );
  }

  const startTracking = () => {
    const initialData: WellnessData = {
      overallScore: 0,
      sleep: 0,
      activity: 0,
      water: 0,
      mood: 0,
      lastUpdated: new Date().toDateString(),
    };
    localStorage.setItem("wellnessProgress", JSON.stringify(initialData));
    setWellnessData(initialData);
    setWellnessState("tracking");
  };

  const completeDay = () => {
    const updatedData = {
      ...wellnessData,
      lastUpdated: new Date().toDateString(),
    };
    localStorage.setItem("wellnessProgress", JSON.stringify(updatedData));
    setWellnessData(updatedData);
    setWellnessState("completed");
  };

  const updateCategory = (
    category: keyof Omit<WellnessData, "overallScore" | "lastUpdated">,
    value: number
  ) => {
    setWellnessData((prev) => {
      const newCategoryValue = clampValue(prev[category] + value);
      const updated = { ...prev, [category]: newCategoryValue };
      // Simple overall score calculation for demo
      updated.overallScore = clampValue(
        (updated.sleep + updated.activity + updated.water + updated.mood) / 4
      );
      localStorage.setItem("wellnessProgress", JSON.stringify(updated));
      return updated;
    });
  };

  const getMotivationalPhrase = (score: number) => {
    if (score >= 80) return "Прекрасное начало! Вы на верном пути.";
    if (score >= 60) return "Отличный прогресс! Продолжайте в том же духе.";
    return "Каждый шаг важен! Давайте улучшим ваш день.";
  };

  const getPersonalizedMessage = (data: WellnessData) => {
    if (data.overallScore >= 80)
      return "Вы великолепны! Ваш день был наполнен энергией и позитивом.";
    if (data.overallScore >= 60)
      return "Хороший день! Небольшие улучшения сделают его еще лучше.";
    return "Вы на верном пути! Завтра будет еще лучше.";
  };

  const renderWelcomeState = () => (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform scale-100">
      <h2 className="text-2xl font-bold text-emerald-600 mb-4">
        Начните свое wellness путешествие
      </h2>
      <div className="relative mb-6">
        <span className="text-6xl animate-pulse">✨</span>{" "}
        {/* Анимированная иконка */}
      </div>
      <p className="text-slate-600 mb-6">
        3 минуты в день для лучшего самочувствия
      </p>
      <button
        onClick={startTracking}
        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
      >
        Начать отслеживание
      </button>
      <p className="text-xs text-slate-500 mt-4">
        <span className="font-bold text-orange-500">Disclaimer:</span> Это
        приложение не является медицинским советом.
      </p>
    </div>
  );

  const renderTrackingState = () => {
    const { overallScore, sleep, activity, water, mood } = wellnessData;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (overallScore / 100) * circumference;

    const categories = [
      {
        name: "Сон",
        icon: <Bed className="w-3 h-3" />,
        value: sleep,
        color: "bg-blue-200",
        progressColor: "bg-blue-500",
      },
      {
        name: "Активность",
        icon: <Activity className="w-3 h-3" />,
        value: activity,
        color: "bg-orange-200",
        progressColor: "bg-orange-500",
      },
      {
        name: "Вода",
        icon: <Droplet className="w-3 h-3" />,
        value: water,
        color: "bg-cyan-200",
        progressColor: "bg-cyan-500",
      },
      {
        name: "Настроение",
        icon: <Smile className="w-3 h-3" />,
        value: mood,
        color: "bg-yellow-200",
        progressColor: "bg-yellow-500",
      },
    ];

    return (
      <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform scale-100">
        <h2 className="text-2xl font-bold text-emerald-600 mb-6">
          Ваш прогресс сегодня
        </h2>

        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-emerald-100 mb-6">
          <span className="text-emerald-600 font-bold text-2xl">
            {overallScore}%
          </span>
        </div>

        <p className="text-slate-600 text-lg mb-6">
          {getMotivationalPhrase(overallScore)}
        </p>

        <div className="w-full space-y-4 mb-6">
          {categories.map((cat) => (
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
              <button
                onClick={() =>
                  updateCategory(
                    cat.name.toLowerCase() as keyof Omit<
                      WellnessData,
                      "overallScore" | "lastUpdated"
                    >,
                    10
                  )
                }
                className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm hover:bg-emerald-200 transition-colors"
              >
                +10
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={completeDay}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300 mt-4"
        >
          Завершить день
        </button>
        <p className="text-xs text-slate-500 mt-4">
          <span className="font-bold text-orange-500">Disclaimer:</span> Это
          приложение не является медицинским советом.
        </p>
      </div>
    );
  };

  const renderCompletedState = () => (
    <div className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform scale-100 overflow-hidden">
      {/* Confetti animation */}
      <div className="confetti-animation absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 60%)`,
            }}
          ></div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-emerald-600 mb-4 z-10">
        Поздравляем!
      </h2>
      <p className="text-slate-700 text-lg mb-6 z-10">
        {getPersonalizedMessage(wellnessData)}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 z-10">
        <button
          onClick={() => {
            localStorage.removeItem("wellnessProgress");
            setWellnessState("welcome");
            setWellnessData({
              overallScore: 0,
              sleep: 0,
              activity: 0,
              water: 0,
              mood: 0,
              lastUpdated: "",
            });
          }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Начать новый день
        </button>
        <button className="bg-white text-emerald-600 border border-emerald-300 px-6 py-3 rounded-lg shadow-md transition-colors duration-300 hover:bg-emerald-50">
          Посмотреть рекомендации дня
        </button>
      </div>
      <p className="text-xs text-slate-500 mt-4 z-10">
        <span className="font-bold text-orange-500">Disclaimer:</span> Это
        приложение не является медицинским советом.
      </p>
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-center min-h-[400px] w-full">
      {wellnessState === "welcome" && renderWelcomeState()}
      {wellnessState === "tracking" && renderTrackingState()}
      {wellnessState === "completed" && renderCompletedState()}

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-pulse {
          animation: pulse 1.5s infinite ease-in-out;
        }

        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: red; /* Will be overridden by inline style */
          animation: confetti-fall 5s ease-in-out infinite;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default DailyWellnessScore;
