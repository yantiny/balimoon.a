import Link from "next/link";

export default function MinivasSection() {
  const products = [
    {
      name: "Kaktus",
      price: "Rp 33.000",
      image: "/minivas/kaktus.jpg",
    },
    {
      name: "Mini Tulip",
      price: "Rp 33.000",
      image: "/minivas/tulip.jpg",
    },
    {
      name: "Garbera",
      price: "Rp 33.000",
      image: "/minivas/garbera.jpg",
    },
    {
      name: "Sunflower",
      price: "Rp 33.000",
      image: "/minivas/matahari.jpg",
    },
  ];

  return (
    <section className="px-4 sm:px-10 md:px-20 py-6 md:py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Mini Vas</h2>

        <Link
          href="/katalog"
          className="text-xs sm:text-sm bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-gray-200 transition"
        >
          See All →
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer">
            {/* Image */}
            <div className="overflow-hidden rounded-xl bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 sm:h-64 md:h-80 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <h3 className="text-xs sm:text-sm font-medium text-gray-800">{product.name}</h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
