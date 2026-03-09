import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bestseller from "@/components/Bestseller";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <Navbar />
      <Hero />
      <Bestseller />
    </main>
  );
}
