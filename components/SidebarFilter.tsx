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
    { id: "buket", label: "Buket Bunga" },
    { id: "hairpin", label: "Hairpin" },
    { id: "minivas", label: "Mini Vas" },
    { id: "keychain", label: "Keychain" },
  ];

  return (
    <div className="w-60 pr-10">
      <h3 className="font-semibold mb-3">KATEGORI</h3>

      <div className="space-y-2 text-sm">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <label
              key={cat.id}
              className="flex gap-2 items-center cursor-pointer group"
            >
              <input
                type="checkbox"
                className="accent-pink-500 w-4 h-4"
                checked={isActive}
                onChange={() => handleFilterChange(cat.id)}
              />

              <span
                className={`transition-colors duration-200 ${
                  isActive
                    ? "text-pink-600 font-bold"
                    : "text-gray-600 group-hover:text-pink-400" 
                }`}
              >
                {cat.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
