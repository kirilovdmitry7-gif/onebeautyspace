export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-green-600 text-center mb-8">
          One Beauty Space
        </h1>
        <p className="text-center text-gray-600 text-xl mb-12">
          Your wellness journey starts here
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Health</h2>
            <p className="text-gray-500">Track your daily wellness</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Studio</h2>
            <p className="text-gray-500">Book beauty appointments</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-semibold text-green-600 mb-4">Store</h2>
            <p className="text-gray-500">Shop wellness products</p>
          </div>
        </div>
      </div>
    </main>
  )
}