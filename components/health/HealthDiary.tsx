"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const clampValue = (value: number) =>
  Math.min(100, Math.max(0, Math.round(value)));

interface HealthDiaryProps {
  onSave: () => void; // Callback to notify parent (HealthPage) to update DailyWellnessScore
}

const moodEmojis = ["😔", "😐", "😊", "😃", "🥰"];

const schema = z.object({
  mood: z.number().min(1).max(5),
  energy: z.number().min(1).max(5),
  sleep: z.number().min(0).max(12),
  water: z.number().min(0).max(5000),
  steps: z.number().min(0).max(50000),
});

type HealthDiaryFormInputs = z.infer<typeof schema>;

export const HealthDiary: React.FC<HealthDiaryProps> = ({ onSave }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<HealthDiaryFormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      mood: 3,
      energy: 3,
      sleep: 8,
      water: 2000,
      steps: 5000,
    },
  });

  const mood = watch("mood");
  const energy = watch("energy");

  useEffect(() => {
    // Load data from localStorage if available
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("healthDiaryData");
      if (savedData) {
        const data = JSON.parse(savedData);
        (Object.keys(data) as Array<keyof HealthDiaryFormInputs>).forEach(
          (key) => {
            setValue(key, data[key]);
          }
        );
      }
    }
  }, [setValue]);

  const onSubmit = (data: HealthDiaryFormInputs) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("healthDiaryData", JSON.stringify(data));
      // Update DailyWellnessScore data in localStorage
      const wellnessProgress = localStorage.getItem("wellnessProgress");
      let currentWellnessData = {
        overallScore: 0,
        sleep: 0,
        activity: 0,
        water: 0,
        mood: 0,
        lastUpdated: new Date().toDateString(),
      };

      if (wellnessProgress) {
        currentWellnessData = JSON.parse(wellnessProgress);
      }

      // Map diary data to wellness score categories (simple mapping for demo)
      currentWellnessData.sleep = clampValue((data.sleep / 12) * 100); // Max 12 hours sleep
      currentWellnessData.activity = clampValue((data.steps / 10000) * 100); // Max 10000 steps
      currentWellnessData.water = clampValue((data.water / 3000) * 100); // Max 3000ml water
      currentWellnessData.mood = clampValue((data.mood / 5) * 100); // Max mood 5

      currentWellnessData.overallScore = clampValue(
        (currentWellnessData.sleep +
          currentWellnessData.activity +
          currentWellnessData.water +
          currentWellnessData.mood) /
          4
      );
      currentWellnessData.lastUpdated = new Date().toDateString();

      localStorage.setItem(
        "wellnessProgress",
        JSON.stringify(currentWellnessData)
      );
      onSave(); // Notify parent to re-evaluate DailyWellnessScore state
      alert("Данные дня успешно сохранены! Отличная работа!");
    }
  };

  return (
    <section className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
        Дневник здоровья
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Mood Slider */}
        <div>
          <label
            htmlFor="mood"
            className="block text-slate-700 font-medium mb-2"
          >
            Настроение: <span className="text-xl">{moodEmojis[mood - 1]}</span>
          </label>
          <input
            type="range"
            id="mood"
            min="1"
            max="5"
            step="1"
            {...register("mood", { valueAsNumber: true })}
            className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          {errors.mood && (
            <p className="text-orange-500 text-sm mt-1">
              {errors.mood.message}
            </p>
          )}
        </div>

        {/* Energy Slider */}
        <div>
          <label
            htmlFor="energy"
            className="block text-slate-700 font-medium mb-2"
          >
            Уровень энергии:{" "}
            <span className="font-bold text-emerald-600">{energy}</span>
          </label>
          <input
            type="range"
            id="energy"
            min="1"
            max="5"
            step="1"
            {...register("energy", { valueAsNumber: true })}
            className="w-full h-2 bg-green-100 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
          {errors.energy && (
            <p className="text-orange-500 text-sm mt-1">
              {errors.energy.message}
            </p>
          )}
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
            {...register("sleep", { valueAsNumber: true })}
            className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            min="0"
            max="12"
          />
          {errors.sleep && (
            <p className="text-orange-500 text-sm mt-1">
              {errors.sleep.message}
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
            {...register("water", { valueAsNumber: true })}
            className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            min="0"
            max="5000"
          />
          {errors.water && (
            <p className="text-orange-500 text-sm mt-1">
              {errors.water.message}
            </p>
          )}
        </div>

        {/* Steps Input */}
        <div>
          <label
            htmlFor="steps"
            className="block text-slate-700 font-medium mb-2"
          >
            Количество шагов:
          </label>
          <input
            type="number"
            id="steps"
            {...register("steps", { valueAsNumber: true })}
            className="w-full p-3 border border-green-200 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
            min="0"
            max="50000"
          />
          {errors.steps && (
            <p className="text-orange-500 text-sm mt-1">
              {errors.steps.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors duration-300"
        >
          Сохранить данные дня
        </button>
      </form>
      <p className="text-xs text-slate-500 mt-8 text-center">
        <span className="font-bold text-orange-500">Disclaimer:</span> Это
        приложение не является медицинским советом.
      </p>
    </section>
  );
};

export default HealthDiary;
