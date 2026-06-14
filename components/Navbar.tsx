"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-10 py-4">
        {/* LEFT SIDE (Logo + Menu) */}
        <div className="flex items-center gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" width={32} height={32} />
            <span className="font-semibold text-lg tracking-wider text-gray-900">BALIMOON.A</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className="px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700 hover:text-black transition"
            >
              Beranda
            </Link>

            <Link
              href="/katalog"
              className="px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700 hover:text-black transition"
            >
              Katalog
            </Link>

            <Link
              target="_blank"
              href="https://linktr.ee/balimoonassesoris?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQjaTlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafoe2wQpHnEjddotVRhpQgUsq618a9RNu8GzMsaQ-_E2ZonhVvMJ0rv05g41w_aem_gm0GazGfdIg1_ocHqWMP4w"
              className="px-2 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-700 hover:text-black transition"
            >
              Kontak
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE (Search - Desktop) */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Cari produk..."
            className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm outline-none w-60 focus:bg-gray-200/80 transition"
          />
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-black p-2 outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          {/* Mobile Search */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Cari produk..."
              className="bg-gray-100 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none w-full focus:bg-gray-200/80 transition"
            />
            <Search size={16} className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
            >
              Beranda
            </Link>

            <Link
              href="/katalog"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
            >
              Katalog
            </Link>

            <Link
              target="_blank"
              href="https://linktr.ee/balimoonassesoris?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAQjaTlleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAafoe2wQpHnEjddotVRhpQgUsq618a9RNu8GzMsaQ-_E2ZonhVvMJ0rv05g41w_aem_gm0GazGfdIg1_ocHqWMP4w"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

