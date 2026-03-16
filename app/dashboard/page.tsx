"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State untuk intip password

async function handleLogin(e: React.FormEvent) {
  e.preventDefault();
  setLoading(true);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    if (data.session) {
      router.push("/dashboard/admin");

      // Memaksa refresh agar Server Component mengambil session terbaru
      router.refresh();
    }
  } catch (err: any) {
    alert(
      err.message === "Invalid login credentials"
        ? "Email atau password salah!"
        : err.message,
    );
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        {/* HEADER IMAGE - Perbaikan URL */}
        <div
          className="h-40 bg-cover bg-center"
          style={{
            backgroundImage: "url('/foto1.jpeg')", // Pakai url() supaya muncul
          }}
        />

        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage your chenille craft shop
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* EMAIL */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <div className="flex items-center border border-slate-200 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-black focus-within:border-transparent transition-all">
                <Mail className="w-4 h-4 text-slate-400 mr-3" />
                <input
                  type="email"
                  placeholder="admin@balimoon.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">
                Password
              </label>
              <div className="flex items-center border border-slate-200 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-black focus-within:border-transparent transition-all">
                <Lock className="w-4 h-4 text-slate-400 mr-3" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full outline-none text-sm bg-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* REMEMBER & FORGOT */}
            <div className="flex justify-between items-center text-xs text-slate-500 px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 accent-black"
                />
                <span className="group-hover:text-slate-700">Remember me</span>
              </label>
              <button
                type="button"
                className="font-medium text-slate-900 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-slate-900 text-white py-3.5 rounded-2xl font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-lg shadow-slate-200 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <p className="text-center text-[10px] font-bold text-slate-300 mt-8 tracking-[0.2em] uppercase">
            Crafted with care by Balimoon
          </p>
        </div>
      </div>
    </div>
  );
}
