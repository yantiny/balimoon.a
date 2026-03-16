import Link from "next/link";

export default function KeychainSection() {
  const products = [
    {
      name: "Sakura Clip",
      price: "Rp 15.000",
      image: "/keychain/kelinci.jpg",
    },
    {
      name: "Pastel Flower",
      price: "Rp 6.000",
      image: "/keychain/gurita.jpg",
    },
    {
      name: "Cherry clip",
      price: "Rp 7.000",
      image: "/keychain/butterfly.jpg",
    },
    {
      name: "Red Butterfly",
      price: "Rp 7.000",
      image: "/keychain/kuromi.jpg",
    },
  ];

  return (
    <section className="px-20 py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Keychain</h2>

        <Link
          href="/katalog"
          className="text-sm bg-gray-100 px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          See All →
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-sm font-semibold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
