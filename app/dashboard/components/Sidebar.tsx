"use client";

import { Box, Settings, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2.5 rounded-xl shadow-md cursor-pointer hover:bg-slate-800 transition"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Backdrop for Mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="md:hidden fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`w-64 border-r border-slate-100 bg-white flex flex-col p-6 h-screen fixed md:sticky top-0 left-0 z-40 transition-transform duration-300 md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header Info */}
        <div className="flex items-center gap-3 mb-10 mt-12 md:mt-0">
          <div className="w-10 h-10 rounded-full bg-orange-100 overflow-hidden flex-shrink-0">
            <Image
              width={50}
              height={50}
              src="/logo.png"
              alt="Admin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-sm text-slate-800 truncate">Balimoon Assesoris</p>
            <p className="text-xs text-slate-500">Admin</p>
          </div>
          <LogOut className="w-4 h-4 text-slate-400 hover:text-red-500 cursor-pointer flex-shrink-0 transition" />
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 rounded-xl text-slate-900 font-semibold cursor-pointer">
            <Box className="w-5 h-5 text-slate-800" />
            <span className="text-sm">Products</span>
          </div>
        </nav>

        {/* Footer Actions */}
        <div className="border-t border-slate-100 pt-4">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl cursor-pointer transition">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </div>
        </div>
      </aside>
    </>
  );
}
