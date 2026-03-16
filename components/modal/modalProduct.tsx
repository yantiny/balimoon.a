"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { X, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
    price: number;
    deskripsi: string;
  image: string;
}

export default function ProductModal({
  isOpen,
  onClose,
  product,
}: {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
}) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const [name, setName] = useState("");
    const [category, setCategory] = useState("bucket");
    const [deskripsi, setDeskripsi] = useState("");
  const [price, setPrice] = useState<number | "">("");

  // ==========================
  // AUTO FILL SAAT EDIT
  // ==========================

  useEffect(() => {
    if (product) {
      setName(product.name);
      setCategory(product.category);
      setPrice(product.price);
      setPreviewUrl(product.image);
    } else {
      setName("");
      setCategory("bucket");
      setPrice("");
      setPreviewUrl(null);
    }
  }, [product]);

  if (!isOpen) return null;

  // ==========================
  // HANDLE IMAGE
  // ==========================

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // ==========================
  // SUBMIT
  // ==========================

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    let image = product?.image || "";

    try {
      // ======================
      // UPLOAD IMAGE
      // ======================

      if (imageFile) {
        const fileExt = imageFile.name.split(".").pop();
        const fileName = `${Date.now()}.${fileExt}`;
        const filePath = `product-images/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from("product_image")
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("product_image")
          .getPublicUrl(filePath);

        image = data.publicUrl;
      }

      // ======================
      // UPDATE PRODUCT
      // ======================

      if (product) {
        const { data, error } = await supabase
          .from("products")
          .update({
            name,
              category,
            deskripsi,
            price,
            image,
          })
              .eq("id", product.id)
  .select();

          if (error) throw error;          

          alert("Produk berhasil diupdate!");
          
          console.log(data);
          console.log(error);
          console.log("PRODUCT:", product);
          console.log("ID:", product?.id);
      }

      // ======================
      // INSERT PRODUCT
      // ======================
      else {
        const { error } = await supabase.from("products").insert([
          {
            name,
            category,
            price,
            image,
            deskripsi,
            is_active: true,
          },
        ]);

        if (error) throw error;

        alert("Produk berhasil ditambahkan!");
      }

      router.refresh();
      onClose();

      setImageFile(null);
      setPreviewUrl(null);
    } catch (error: any) {
      alert("Gagal: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold text-slate-800">
            {product ? "Edit Product" : "Add New Product"}
          </h2>

          <button
            onClick={onClose}
            className="p-1 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* IMAGE */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
              Product Image
            </label>

            <div className="relative group">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="product-image"
              />

              <label
                htmlFor="product-image"
                className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 hover:border-slate-300 transition-all overflow-hidden relative"
              >
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 text-slate-300 mb-2" />
                    <p className="text-xs text-slate-400">
                      Click to upload image
                    </p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* NAME */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
              Product Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Contoh: Buket Mawar Merah"
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none text-sm"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none text-sm bg-white"
            >
              <option value="bucket">BUKET BUNGA</option>
              <option value="keychain">KEYCHAIN</option>
              <option value="hairpin">HAIRPIN</option>
              <option value="minivas">MINI VAS</option>
            </select>
                  </div>
                  <div>
                      <label htmlFor="description" className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
                          Description
                      </label>
                      <textarea
                          id="deskripsi"
                          value={deskripsi}
                          onChange={(e) => setDeskripsi (e.target.value)}
                          className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none text-sm"
                          placeholder="Enter product description"
                      />
                  </div>

          {/* PRICE */}
          <div>
            <label className="block text-xs font-bold text-slate-400 mb-1 uppercase tracking-wider">
              Price (IDR)
            </label>

            <input
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              required
              type="number"
              placeholder="50000"
              className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none text-sm"
            />
          </div>

          {/* BUTTON */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 font-medium text-slate-600 hover:bg-slate-50 transition-all text-sm"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all text-sm disabled:opacity-50"
            >
              {loading
                ? "Saving..."
                : product
                  ? "Update Product"
                  : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
