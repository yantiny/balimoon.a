import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-20 py-8">
      <div className="relative h-[420px] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero.jpeg"
          alt="Bouquet"
          className="absolute w-full h-200 object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Keindahan Bunga & <br />
            Aksesoris untuk Momen <br />
            Spesial
          </h1>

          <p className="mt-4 text-sm md:text-base max-w-xl">
            Temukan koleksi buket bunga dan aksesoris handmade yang dirancang
            dengan kasih sayang.
          </p>

          <Link
            href="/katalog"
            className="mt-6 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Lihat Katalog
          </Link>
        </div>
      </div>
    </section>
  );
}
