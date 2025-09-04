import DailyWellnessScore from '../components/health/DailyWellnessScore';

export default function HealthPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-600 mb-8 text-center">
          Health Dashboard
        </h1>
        <DailyWellnessScore score={85} tier="basic" />
      </div>
    </main>
  );
}
