import { DailyWellnessScore } from "../../components/health/DailyWellnessScore";

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 sm:p-6 lg:p-8 flex flex-col items-center">
      <div className="max-w-2xl mx-auto w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-8 text-center">
          Health Dashboard
        </h1>
        <DailyWellnessScore tier="basic" />
      </div>
      <p className="text-xs text-slate-500 mt-8 text-center">
        <span className="font-bold text-orange-500">Disclaimer:</span> Это
        приложение не является медицинским советом.
      </p>
    </main>
  );
}
