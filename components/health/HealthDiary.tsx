"use client";

import React from "react";

interface WellnessData {
  sleep: number;
  mood: number;
  energy: number;
  water: number;
  steps: number;
}

interface HealthDiaryProps {
  data: WellnessData;
  onDataChange: (data: WellnessData) => void;
}

const moodEmojis = ["😔", "😐", "😊", "😃", "🥰"];

export const HealthDiary: React.FC<HealthDiaryProps> = ({
  data,
  onDataChange,
}) => {
  const handleSliderChange = (category: keyof WellnessData, value: number) => {
    const newData = { ...data, [category]: value };
    onDataChange(newData);
  };

  const handleSave = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("healthDiaryData", JSON.stringify(data));
      alert("Данные дня успешно сохранены! Отличная работа!");
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
        Дневник здоровья
      </h2>
      <div className="space-y-6">
        {/* Mood Slider */}
        <div>
          <label
            htmlFor="mood"
            className="block text-slate-700 font-medium mb-2"
          >
            Настроение:{" "}
            <span className="text-xl">{moodEmojis[data.mood - 1]}</span>
          </label>
          <input
            type="range"
            id="mood"
            min="1"
            max="5"
            step="1"
            value={data.mood}
            onChange={(e) =>
              handleSliderChange("mood", parseInt(e.target.value))
            }
            className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
        </div>

        {/* Sleep Input */}
        <div>
          <label
            htmlFor="sleep"
            className="block text-slate-700 font-medium mb-2"
          >
            Качество сна (часы):
          </label>
          <input
            type="number"
            id="sleep"
            step="0.5"
            value={data.sleep}
            onChange={(e) =>
              handleSliderChange("sleep", parseFloat(e.target.value))
            }
            className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            min="0"
            max="12"
            placeholder="8"
          />
          {data.sleep < 4 && (
            <p className="text-amber-500 text-sm mt-1">
              Постарайтесь спать не менее 4 часов для лучшего самочувствия.
            </p>
          )}
          {data.sleep > 12 && (
            <p className="text-amber-500 text-sm mt-1">
              Слишком много сна может быть не менее вредно, чем его недостаток.
            </p>
          )}
        </div>

        {/* Water Input */}
        <div>
          <label
            htmlFor="water"
            className="block text-slate-700 font-medium mb-2"
          >
            Количество воды (мл):
          </label>
          <input
            type="number"
            id="water"
            step="50"
            value={data.water}
            onChange={(e) =>
              handleSliderChange("water", parseInt(e.target.value))
            }
            className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            min="0"
            max="5000"
            placeholder="2000"
          />
          {data.water >= 2000 && (
            <p className="text-emerald-600 text-sm mt-1">
              Отлично! Вы пьете достаточно воды.
            </p>
          )}
        </div>

        {/* Energy Slider */}
        <div>
          <label
            htmlFor="energy"
            className="block text-slate-700 font-medium mb-2"
          >
            Энергия:{" "}
            <span className="text-xl">{moodEmojis[data.energy - 1]}</span>
          </label>
          <input
            type="range"
            id="energy"
            min="1"
            max="5"
            step="1"
            value={data.energy}
            onChange={(e) =>
              handleSliderChange("energy", parseInt(e.target.value))
            }
            className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
        </div>

        {/* Steps Input */}
        <div>
          <label
            htmlFor="steps"
            className="block text-slate-700 font-medium mb-2"
          >
            Шаги:
          </label>
          <input
            type="number"
            id="steps"
            step="50"
            value={data.steps}
            onChange={(e) =>
              handleSliderChange("steps", parseInt(e.target.value))
            }
            className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            min="0"
            max="20000"
            placeholder="8000"
          />
          {data.steps >= 8000 && (
            <p className="text-emerald-600 text-sm mt-1">
              Поздравляем! Вы достигли своей цели по активности!
            </p>
          )}
          {data.steps > 0 && data.steps < 8000 && (
            <p className="text-amber-500 text-sm mt-1">
              Продолжайте двигаться! Каждый шаг приближает вас к цели.
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Сохранить данные дня
        </button>
      </div>
      <p className="text-xs text-slate-500 mt-8 text-center">
        <span className="font-bold text-orange-500">Disclaimer:</span> Это
        приложение не является медицинским советом.
      </p>
    </section>
  );
};

export default HealthDiary;
