import Link from "next/link"; // Import Link untuk navigasi
// import Image from "next/image"; // Import Image untuk optimasi gambar

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    /* Gunakan Link dan arahkan href ke folder /katalog/[id] */
    <Link href={`/katalog/${product.id}`} className="group cursor-pointer">
      <div className="overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="mt-3">
        <p className="text-xs text-gray-400 uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-sm font-medium group-hover:text-pink-600 transition">
          {product.name}
        </h3>
        <p className="font-semibold text-gray-900">
          Rp {product.price.toLocaleString("id-ID")}
        </p>
      </div>
    </Link>
  );
}
