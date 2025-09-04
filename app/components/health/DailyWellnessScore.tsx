import React from "react";

type Tier = "basic" | "light" | "pro";

interface DailyWellnessScoreProps {
  /** Wellness score from 0‑100 */
  score: number;
  /** Subscription tier – shows the upgrade button for basic tier */
  tier: Tier;
}

/** Simple utility to clamp a value into 0‑100 range */
const clampScore = (value: number) =>
  Math.min(100, Math.max(0, Math.round(value)));

export const DailyWellnessScore: React.FC<DailyWellnessScoreProps> = ({
  score,
  tier,
}) => {
  const displayScore = clampScore(score);

  // SVG circle geometry
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayScore / 100) * circumference;

  const positiveMessage = () => {
    if (displayScore >= 80)
      return "You're shining bright! Keep the momentum going.";
    if (displayScore >= 60)
      return "Great job! A few tweaks will make it perfect.";
    return "Every step counts – let’s boost that score together!";
  };

  return (
    <section className="flex flex-col items-center p-3 bg-white rounded-lg shadow-md max-w-xs">
      {/* Title */}
      <h2 className="text-lg font-semibold text-emerald-600 mb-4">
        Daily Wellness Score
      </h2>

      {/* Circular progress */}
      <svg className="w-20 h-20" viewBox="0 0 120 120">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
        />
        <circle
          className="text-emerald-600"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="60"
          cy="60"
          strokeDasharray={circumference.toString()}
          strokeDashoffset={offset.toString()}
          transform="rotate(-90 60 60)"
        />
        {/* Score text */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-emerald-600 font-medium text-lg"
        >
          {displayScore}%
        </text>
      </svg>

      {/* Positive message */}
      <p className="mt-4 text-center text-xs text-gray-700 max-w-xs">
        {positiveMessage()}
      </p>

      {/* Upgrade button – only for basic tier */}
      {tier === "basic" && (
        <button className="mt-6 px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition">
          Улучшить подписку
        </button>
      )}
    </section>
  );
};

export default DailyWellnessScore;
