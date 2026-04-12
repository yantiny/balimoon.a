import { supabase } from "@/lib/supabaseClient";
import ProductCard from "@/components/ProductCards";
import SidebarFilter from "@/components/SidebarFilter";

export default async function KatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const selectedCategory = params.category;

  let query = supabase.from("products").select("*").eq("is_active", true); // hanya tampilkan produk aktif

  if (selectedCategory && selectedCategory !== "all") {
    query = query.eq("category", selectedCategory);
  }

  const { data: products, error } = await query;

  if (error) {
    console.error("Gagal ambil data:", error.message);
  }

  return (
    <div className="px-20 py-10 bg-white">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">Semua Produk</h1>
        <p className="text-gray-500 mt-2">
          Temukan keindahan rangkaian bunga kawat bulu dan aksesoris handmade kami.
        </p>
      </div>

      <div className="flex">
        <SidebarFilter activeCategory={selectedCategory} />

        <div className="flex-1">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              Produk tidak ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
