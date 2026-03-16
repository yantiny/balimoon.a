"use client";

import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProductModal from "@/components/modal/modalProduct";

interface Product {
  id: number;
  name: string;
  sku: string;
  category: string;
  price: number;
  is_active: boolean;
  image: string;
}

export default function ProductTable({
  products,
}: {
  products: Product[] | null;
}) {
  const router = useRouter();

  const [loadingId, setLoadingId] = useState<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const formatIDR = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // ==============================
  // DELETE PRODUCT
  // ==============================

  const handleDelete = async (id: number, imageName: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus produk ini?")) return;

    if (imageName) {
      const fileName = imageName.split("/").pop();

      await supabase.storage
        .from("product_image")
        .remove([`product-images/${fileName}`]);
    }

    const { error } = await supabase.from("products").delete().eq("id", id);

    if (error) {
      alert("Gagal menghapus: " + error.message);
    } else {
      router.refresh();
    }
  };

  // ==============================
  // TOGGLE STATUS
  // ==============================

  const handleToggleStatus = async (id: number, currentStatus: boolean) => {
    setLoadingId(id);

    const { error } = await supabase
      .from("products")
      .update({ is_active: !currentStatus })
      .eq("id", id);

    if (error) {
      alert("Gagal update status: " + error.message);
    } else {
      router.refresh();
    }

    setLoadingId(null);
  };

  // ==============================
  // EDIT PRODUCT
  // ==============================

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50/50 border-b border-slate-100">
            <tr className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <th className="px-6 py-4">Image</th>
              <th className="px-6 py-4">Product Name</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Display Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-50">
            {products && products.length > 0 ? (
              products.map((p) => (
                <tr
                  key={p.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  {/* IMAGE */}
                  <td className="px-6 py-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden border border-slate-100 relative">
                      {p.image ? (
                        <Image
                          width={50}
                          height={50}
                          src={p.image}
                          alt={p.name}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-400">
                          No Img
                        </div>
                      )}
                    </div>
                  </td>

                  {/* NAME */}
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-800 text-sm">{p.name}</p>
                  </td>

                  {/* CATEGORY */}
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 text-slate-600 uppercase">
                      {p.category}
                    </span>
                  </td>

                  {/* PRICE */}
                  <td className="px-6 py-4 font-bold text-slate-700 text-sm">
                    {formatIDR(p.price)}
                  </td>

                  {/* TOGGLE STATUS */}
                  <td className="px-6 py-4">
                    <div
                      onClick={() =>
                        !loadingId && handleToggleStatus(p.id, p.is_active)
                      }
                      className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors relative ${
                        p.is_active ? "bg-slate-900" : "bg-slate-200"
                      } ${loadingId === p.id ? "opacity-50" : ""}`}
                    >
                      <div
                        className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ${
                          p.is_active ? "translate-x-5" : "translate-x-0"
                        }`}
                      />
                    </div>
                  </td>

                  {/* ACTIONS */}
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-4">
                      <button
                        onClick={() => handleEdit(p)}
                        className="hover:text-blue-500 transition-colors cursor-pointer"
                      >
                        <Pencil className="w-4 h-4 text-slate-400" />
                      </button>

                      <button
                        onClick={() => handleDelete(p.id, p.image)}
                        className="hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-slate-400 italic"
                >
                  Tidak ada produk ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* FOOTER */}
        <div className="p-4 border-t flex justify-between items-center text-xs text-slate-500">
          <p>Showing {products?.length || 0} products</p>

          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
              Previous
            </button>

            <button className="px-3 py-1 bg-slate-900 text-white rounded-lg">
              1
            </button>

            <button className="px-3 py-1 border rounded-lg hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>

      {/* MODAL EDIT / ADD */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
      />
    </>
  );
}
