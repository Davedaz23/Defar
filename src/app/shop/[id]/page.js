const products = [
    { id: 1, name: "Matte Lipstick", price: 15, image: "/lipstick.jpg" },
    { id: 2, name: "Liquid Foundation", price: 20, image: "/foundation.jpg" },
  ];
  
  export default function Shop() {
    return (
      <main className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800">Shop Our Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg">
              <img src={product.image} alt={product.name} className="rounded-lg w-full" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-pink-500 font-bold">${product.price}</p>
              <button className="bg-pink-500 text-white px-4 py-2 rounded mt-2 w-full">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    );
  }
  