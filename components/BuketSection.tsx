import Link from "next/link";
import Image from "next/image";

export default function BuketSection() {
  const products = [
    {
      name: "Lilium Rosa",
      price: "Rp 59.000",
      image: "/buket/tulip.jpg",
    },
    {
      name: "Purple Garbera",
      price: "Rp 27.000",
      image: "/buket/garbera.jpg",
    },
    {
      name: "Blue Sea",
      price: "Rp 167.000",
      image: "/buket/biru.jpg",
    },
    {
      name: "Tiny Flowers",
      price: "Rp 149.000",
      image: "/buket/kecil.jpg",
    },
  ];

  return (
    <section className="px-4 sm:px-10 md:px-20 py-6 md:py-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Buket Bunga</h2>

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
              <Image
                width={0}
                height={0}
                sizes="100vw"
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
