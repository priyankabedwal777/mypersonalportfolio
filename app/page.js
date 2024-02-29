import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
  <main className="flex min-h-screen flex-col bg-[#121212] container  ">
   <Navbar/>
   <div className="container mx-auto px-12 py-4">
    <Hero />
    </div>
   
  </main>
  );
}
