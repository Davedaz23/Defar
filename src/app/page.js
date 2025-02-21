export default function Home() {
  return (
    <main className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-pink-600">Welcome to Luxe Beauty</h1>
        <p className="text-gray-700 text-center mt-4">Your one-stop shop for premium cosmetics</p>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src="/lipstick.jpg" alt="Lipstick" className="rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Lipsticks</h3>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src="/foundation.jpg" alt="Foundation" className="rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Foundations</h3>
          </div>
          <div className="p-4 bg-white shadow-lg rounded-lg">
            <img src="/perfume.jpg" alt="Perfume" className="rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">Perfumes</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
