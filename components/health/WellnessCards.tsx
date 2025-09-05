"use client";

import React from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface WellnessCard {
  id: string;
  title: string;
  content: string;
  category: string;
}

const mockCards: WellnessCard[] = [
  {
    id: "1",
    title: "Утренний ритуал для энергии",
    content: "Начните день с 5-минутной медитации и стакана воды с лимоном.",
    category: "Энергия",
  },
  {
    id: "2",
    title: "Здоровый перекус",
    content:
      "Попробуйте яблоко с арахисовой пастой для поддержания уровня сахара.",
    category: "Питание",
  },
  {
    id: "3",
    title: "Быстрая разминка",
    content:
      "3-минутная растяжка поможет снять напряжение после долгого сидения.",
    category: "Активность",
  },
];

export const WellnessCards: React.FC = () => {
  return (
    <section className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-emerald-600 mb-6 text-center">
        Wellness Рекомендации
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCards.map((card) => (
          <div
            key={card.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl"
          >
            <span className="text-sm font-medium text-slate-500 mb-2">
              {card.category}
            </span>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              {card.title}
            </h3>
            <p className="text-slate-600 text-sm flex-grow mb-4">
              {card.content}
            </p>
            <div className="flex justify-end gap-3 mt-auto">
              <button className="p-2 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-200 transition-colors">
                <ThumbsUp className="w-4 h-4" />
              </button>
              <button className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition-colors">
                <ThumbsDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-8 text-center">
        <span className="font-bold text-orange-500">Disclaimer:</span> Эти
        рекомендации не являются медицинским советом.
      </p>
    </section>
  );
};

export default WellnessCards;
