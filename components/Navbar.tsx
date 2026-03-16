"use client";

import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" bg-white">
      <div className="flex items-center justify-between px-10 py-4">
        {/* LEFT SIDE (Logo + Menu) */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-semibold text-lg">BALIMOON.A</span>
          </div>

          {/* Menu */}
          <div className="flex gap-6 items-center">
            <Link
              href="/"
              className="px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-300 text-gray-700 hover:text-black"
            >
              Beranda
            </Link>

            <Link
              href="/katalog"
              className="px-2 py-2 rounded-md text-sm font-medium  hover:bg-gray-300 text-gray-700 hover:text-black"
            >
              Katalog
            </Link>

            <Link
              target="blank"
              href="https://linktr.ee/balimoonassesoris?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQjaTlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafoe2wQpHnEjddotVRhpQgUsq618a9RNu8GzMsaQ-_E2ZonhVvMJ0rv05g41w_aem_gm0GazGfdIg1_ocHqWMP4w"
              className="px-2 py-2 rounded-md text-sm font-medium  hover:bg-gray-300 text-gray-700 hover:text-black"
            >
              Kontak
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (Search) */}
        <div className="relative">
          <input
            type="text"
            placeholder="Cari produk..."
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none"
          />
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>
    </nav>
  );
}
