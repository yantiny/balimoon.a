"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, ShoppingBag } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold mb-4">BALIMOON</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kami menghadirkan kebahagiaan melalui setiap rangkaian bunga dan
              aksesoris handmade berkualitas tinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/" className="hover:text-black">
                  Beranda
                </Link>
              </li>

              <li>
                <Link href="/katalog" className="hover:text-black">
                  Katalog
                </Link>
              </li>

              <li>
                <Link href="/kontak" className="hover:text-black">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Sosial Media</h3>

            <div className="space-y-3">
              <a
                href="https://www.instagram.com/balimoon.a?igsh=MW5jN2Z1ZmNjaTlrcg=="
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-black"
              >
                <Instagram className="text-pink-500" size={20} />
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@balimoon.a?_r=1&_t=ZS-94eI4RV1eOQ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-black"
              >
                <FaTiktok className="text-black" size={20} />
                TikTok
              </a>

              <a
                href="https://wa.me/6283125400242?text=Halo, saya tertarik dengan produk Balimoon Assesoris"
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-black"
              >
                <Phone className="text-green-500" size={20} />
                WhatsApp
              </a>
              <a
                href="https://www.facebook.com/share/1J5nCfSoEp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 hover:text-black"
              >
                <Facebook className="text-blue-600" size={20} />
                Facebook
              </a>
            </div>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="font-semibold mb-4">Marketplace</h3>

            <div className="space-y-3">
              <a
                href="https://id.shp.ee/hTpxeGgu"
                target="_blank"
                className="flex items-center gap-3 text-gray-600 hover:text-black"
              >
                <ShoppingBag className="text-orange-500" size={20} />
                Shopee
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t mt-12 pt-6 text-center text-sm text-gray-500">
          © 2024 Balimoon Accessory & Florist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
