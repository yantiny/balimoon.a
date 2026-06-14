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
    <div className="px-4 sm:px-10 md:px-20 py-6 md:py-10 bg-white">
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Semua Produk</h1>
        <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
          Temukan keindahan rangkaian bunga kawat bulu dan aksesoris handmade kami.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <SidebarFilter activeCategory={selectedCategory} />

        <div className="flex-1">
          {products && products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400 text-sm">
              Produk tidak ditemukan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
