import { supabase } from "@/lib/supabaseClient";
// import Image from "next/image";
import { notFound } from "next/navigation";
import { MessageCircle, ShoppingBag } from "lucide-react"; // Import ikon

export default async function DetailProdukPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: product, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", slug)
    .single();

  if (error || !product) {
    notFound();
  }

  // Fungsi untuk format link WhatsApp otomatis
  const waLink = `https://wa.me/6283125400242?text=Halo, saya tertarik dengan produk ${product.name}`;

  return (
    <div className="max-w-6xl mx-auto px-10 py-16 flex flex-col md:flex-row gap-12 bg-white">
      {/* Bagian Gambar */}
      <div className="w-full md:w-1/2">
        <div className="sticky top-10">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover rounded-3xl shadow-sm"
          />
        </div>
      </div>

      {/* Bagian Detail */}
      <div className="w-full md:w-1/2 flex flex-col">
        <span className="text-indigo-400 font-medium uppercase tracking-widest text-xs mb-2">
          {product.category}
        </span>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2 italic">
          {product.name}
        </h1>
        <p className="text-3xl font-bold text-slate-800 mb-6">
          Rp {product.price.toLocaleString("id-ID")}
        </p>

        {/* Deskripsi & List Detail */}
        <div className="text-slate-500 leading-relaxed mb-8 space-y-4 text-sm">
          <p>
            {product.deskripsi || "Hadirkan keindahan abadi di meja Anda..."}
          </p>

          {/* <ul className="space-y-2 ml-2">
            <li>• Bahan: Benang katun premium soft</li>
            <li>• Dimensi: Tinggi kurang lebih 25cm</li>
            <li>• Sudah termasuk wrapping kertas kado cantik</li>
            <li>• Awet dan tidak layu selamanya</li>
          </ul> */}
        </div>

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-3 mt-auto">
          {/* WhatsApp Button */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-4 rounded-2xl hover:bg-[#20ba59] transition-all shadow-md"
          >
            <MessageCircle size={20} />
            Pesan via WhatsApp
          </a>

          {/* Shopee Button */}
          <a
            href={product.shopee_link || "https://id.shp.ee/hTpxeGgu"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#EE4D2D] text-white font-semibold py-4 rounded-2xl hover:bg-[#d73d1d] transition-all shadow-md"
          >
            <ShoppingBag size={20} />
            Beli di Shopee
          </a>
        </div>
      </div>
    </div>
  );
}
