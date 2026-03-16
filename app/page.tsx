// import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import HairpinSection from "@/components/HairpinSection";
// import Bestseller from "@/components/Bestseller";
import BuketSection from "@/components/BuketSection";
import MinivasSection from "@/components/MinivasSection";
import KeychainSection from "@/components/KeychainSection";
import TestimonialSection from "@/components/TestimoniSection";
// import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* <Navbar /> */}
      <Hero />
      <CategorySection />
      <BuketSection />
      <HairpinSection />
      <MinivasSection />
      <KeychainSection />
      <TestimonialSection />
      {/* <Footer />   */}
      {/* <Bestseller /> */}
    </main>
  );
}
