"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  activeCategory?: string;
};

export default function SidebarFilter({ activeCategory }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (activeCategory === category) {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    router.push(`?${params.toString()}`);
  };

  const categories = [
    { id: "bucket", label: "Buket Bunga" },
    { id: "hairpin", label: "Hairpin" },
    { id: "minivas", label: "Mini Vas" },
    { id: "keychain", label: "Keychain" },
  ];

  return (
    <div className="w-full md:w-60 md:pr-6 mb-6 md:mb-0">
      <h3 className="font-bold text-xs tracking-wider text-gray-400 mb-3 hidden md:block uppercase">
        Kategori
      </h3>

      {/* Horizontal scrolling chips on mobile, vertical list on desktop */}
      <div className="flex md:flex-col gap-2 overflow-x-auto pb-3 md:pb-0 scroll-smooth -mx-4 px-4 md:mx-0 md:px-0 no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 md:px-0 md:py-1.5 md:bg-transparent rounded-full md:rounded-none text-xs md:text-sm font-medium border md:border-none whitespace-nowrap transition cursor-pointer text-left ${
                isActive
                  ? "bg-pink-500 border-pink-500 text-white font-bold md:text-pink-600 md:font-bold"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:text-pink-500 hover:bg-gray-100/50 md:bg-transparent md:hover:bg-transparent"
              }`}
            >
              <input
                type="checkbox"
                className="accent-pink-500 w-4 h-4 hidden md:block cursor-pointer"
                checked={isActive}
                readOnly
              />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
