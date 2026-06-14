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
  {
    name: "Rani",
    image: "/testimoni/image.png",
    review:
      "Iiiiih lucu cekayiii😖😖thank you min udah mau didadak orderannya dan hasilnya bagus sesuai request👍 luv banget sma hasilnya🥰🥰",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "start"
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    
    setScrollSnaps(emblaApi.scrollSnapList());
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
    });
    
    onSelect();
  }, [emblaApi]);

  return (
    <section className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Testimoni Pelanggan
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition cursor-pointer"
            >
              Kembali
            </button>

            <button
              onClick={() => emblaApi?.scrollNext()}
              className="px-3 py-1.5 sm:px-4 sm:py-2 border border-gray-200 rounded-lg bg-white text-sm shadow-sm hover:bg-gray-100 transition cursor-pointer"
            >
              Lanjut
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col min-h-[220px] h-full shadow-sm">
                  {/* Avatar + Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />

                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={16}
                          className={
                            j < item.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200"
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="font-semibold text-base text-gray-800 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicator */}
        <div className="flex justify-center mt-8 gap-2.5">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? "bg-slate-800 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}