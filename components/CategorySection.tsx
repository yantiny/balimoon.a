import Link from "next/link";

export default function CategorySection() {
  const categories = [
    {
      name: "Buket Bunga",
      image: "/kategori/buket.jpg",
      link: "/katalog?category=buket",
    },
    {
      name: "Hairpin",
      image: "/kategori/hairpin.jpg",
      link: "/katalog?category=hairpin",
    },
    {
      name: "Mini Vas",
      image: "/kategori/minivas.jpg",
      link: "/katalog?category=minivas",
    },
    {
      name: "Keychain",
      image: "/kategori/keychain.jpg",
      link: "/katalog?category=keychain",
    },
  ];

  return (
    <section className="px-20 py-10">
      <h2 className="text-xl font-semibold mb-6">Kategori Produk</h2>

      <div className="grid grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="relative rounded-xl overflow-hidden group"
          >
            {/* Image */}
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text */}
            <div className="absolute bottom-3 left-4 text-white font-medium">
              {category.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
