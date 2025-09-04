export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-wellness-mint/10 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-primary-600 text-center mb-8">
          One Beauty Space
        </h1>
        <p className="text-center text-neutral-600">
          Your wellness journey starts here
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-wellness">
            <h2 className="text-xl font-semibold text-primary-600 mb-2">Health</h2>
            <p className="text-neutral-500">Track your wellness journey</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-wellness">
            <h2 className="text-xl font-semibold text-primary-600 mb-2">Studio</h2>
            <p className="text-neutral-500">Book beauty services</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-wellness">
            <h2 className="text-xl font-semibold text-primary-600 mb-2">Store</h2>
            <p className="text-neutral-500">Shop wellness products</p>
          </div>
        </div>
      </div>
    </main>
  )
}
