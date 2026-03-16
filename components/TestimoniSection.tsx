"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Viona",
    image: "/testimoni/image.png",
    review: "Lucu banget produk-produknya! Saya beli untuk hadiah ulang tahun",
    rating: 5,
  },
  {
    name: "Cok Mas",
    image: "/testimoni/image.png",
    review: "Gancinya lucu lucu dan bisa di custom, recommended banget",
    rating: 5,
  },
  {
    name: "Cahya",
    image: "/testimoni/image.png",
    review: "Produknya sesuai ekspektasi saya hehe",
    rating: 4,
  },
  {
    name: "Anindi",
    image: "/testimoni/image.png",
    review: "Adminnya sangat ramahh dan membantu banget, responnya cepat.",
    rating: 4,
  },
  {
    name: "Dayu Angga",
    image: "/testimoni/image.png",
    review: "Bagus banget kak, bunga nya lucu dan warnanya soft",
    rating: 4,
  },
  {
    name: "Tia",
    image: "/testimoni/image.png",
    review: "Kualitas produk bagus kak anti mainstream pantang layu",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const itemsPerSlide = 3;

  const slides = [];
  for (let i = 0; i < testimonials.length; i += itemsPerSlide) {
    slides.push(testimonials.slice(i, i + itemsPerSlide));
  }

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Testimoni Pelanggan
          </h2>

          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Kembali
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="px-4 py-2 border rounded-lg bg-white shadow hover:bg-gray-100"
            >
              Lanjut
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((group, index) => (
              <div key={index} className="flex-[0_0_100%] px-4">
                <div className="grid grid-cols-3 gap-6">
                  {group.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl shadow-sm p-6 flex flex-col min-h-[220px]"
                    >
                      {/* Avatar + Rating */}
                      <div className="flex items-center justify-between mb-4">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />

                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star
                              key={j}
                              size={18}
                              className={
                                j < item.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                      </div>

                      <h3 className="font-semibold text-lg mb-2">
                        {item.name}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                        {item.review}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicator */}
        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === selectedIndex
                  ? "bg-indigo-500 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
