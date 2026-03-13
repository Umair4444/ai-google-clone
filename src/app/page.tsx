import GeminiHeader from "@/components/Gemini/GeminiHeader";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MarqueeCarousel from "@/components/Gemini/MarqueeCarousel";
import GetStarted from "@/components/Gemini/GetStarted";
import ExploreBanner from "@/components/Gemini/ExploreBanner";
import NewsGroupSection from "@/components/Gemini/NewsGroupSection";

const HomePage = () => {
  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <Navbar />

      <GeminiHeader />

      <MarqueeCarousel />

      <GetStarted />

      <ExploreBanner />

      <NewsGroupSection />

      <Footer />
    </main>
  );
};

export default HomePage;
