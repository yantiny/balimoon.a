import { supabase } from "@/lib/supabaseClient";
import Sidebar from "@/app/dashboard/components/Sidebar";
import StatCards from "@/app/dashboard/components/StatsCard";
import ProductTable from "@/app/dashboard/components/ProductTable";
import DashboardHeader from "@/app/dashboard/components/Header";

export const revalidate = 0;

export default async function DashboardPage() {
  // cek user login

  // fetch produk
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50">
        <div className="p-6 bg-white rounded-xl shadow-lg border border-red-200">
          <h2 className="text-red-600 font-bold">Gagal Mengambil Data</h2>
          <p className="text-sm text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  const totalProducts = products?.length || 0;
  const activeListings =
    products?.filter((p) => p.is_active === true).length || 0;
  const drafts = totalProducts - activeListings;

  return (
    <div className="flex min-h-screen bg-gray-50/50">
      <Sidebar />

      <div className="flex-1">
        <main className="p-8 max-w-7xl mx-auto">
          <DashboardHeader />

          <StatCards
            total={totalProducts}
            active={activeListings}
            drafts={drafts}
          />

          <div className="mt-10">
            <ProductTable products={products || []} />
          </div>
        </main>
      </div>
    </div>
  );
}
