// app/dashboard/components/StatsCard.tsx

interface StatProps {
  total: number;
  active: number;
  drafts: number;
}

export default function StatCards({ total, active, drafts }: StatProps) {
  const stats = [
    { label: "TOTAL PRODUCTS", value: total, color: "text-slate-800" },
    { label: "ACTIVE LISTINGS", value: active, color: "text-slate-800" },
    { label: "DRAFTS", value: drafts, color: "text-orange-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
        >
          <p className="text-[10px] font-bold text-slate-400 tracking-widest mb-2 uppercase">
            {stat.label}
          </p>
          <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
