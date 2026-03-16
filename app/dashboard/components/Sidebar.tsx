import { Box, Settings, LogOut } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white flex flex-col p-6 h-screen sticky top-0">
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-full bg-orange-200 overflow-hidden">
                  <Image
                      width={50}
                      height={50}
            src="/avatar.jpg"
            alt="Admin"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-slate-800">Yantini</p>
          <p className="text-xs text-slate-500">Admin</p>
        </div>
        <LogOut className="w-4 h-4 text-slate-400 cursor-pointer" />
      </div>

      <nav className="flex-1 space-y-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-slate-100 rounded-xl text-slate-900 font-medium">
          <Box className="w-5 h-5" />
          <span>Products</span>
        </div>
      </nav>

      <div className="border-t pt-4">
        <div className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-xl cursor-pointer">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </div>
      </div>
    </aside>
  );
}
