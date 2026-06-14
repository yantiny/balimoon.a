"use client"; // Wajib karena pakai useState

import { useState } from "react";
import ProductModal from "@/components/modal/modalProduct";

export default function DashboardHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
            Product Inventory
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage your handmade craft listings and availability.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 hover:bg-slate-800 transition-all shadow-sm active:scale-95 w-full sm:w-auto"
        >
          <span className="text-xl">+</span> Add New Product
        </button>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
