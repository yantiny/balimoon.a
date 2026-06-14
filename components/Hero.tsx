import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-4 sm:px-10 md:px-20 py-6 md:py-8">
      <div className="relative h-[320px] sm:h-[380px] md:h-[420px] rounded-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src="/hero.jpeg"
          alt="Bouquet"
          className="absolute w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Keindahan Bunga & <br className="hidden sm:inline" />
            Aksesoris untuk Momen <br className="hidden sm:inline" />
            Spesial
          </h1>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base max-w-xl">
            Temukan koleksi buket bunga dan aksesoris handmade yang dirancang
            dengan kasih sayang.
          </p>

          <Link
            href="/katalog"
            className="mt-4 sm:mt-6 bg-white text-black px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-200 transition shadow-md"
          >
            Lihat Katalog
          </Link>
        </div>
      </div>
    </section>
  );
}

