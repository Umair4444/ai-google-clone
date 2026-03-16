import GeminiHeader from "@/components/Gemini/GeminiHeader";
import GoogleAIFooter from "@/components/layout/GoogleAIFooter";
import Navbar from "@/components/layout/Navbar";
import MarqueeCarousel from "@/components/Gemini/MarqueeCarousel";
import GetStarted from "@/components/Gemini/GetStarted";
import ExploreBanner from "@/components/Gemini/ExploreBanner";
import NewsGroupSection from "@/components/Gemini/NewsGroupSection";
import SolutionGenerator from "@/components/Gemini/SolutionGenerator";

const HomePage = () => {
  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <Navbar />

      <GeminiHeader />

      <SolutionGenerator />

      <MarqueeCarousel />

      <GetStarted />

      <ExploreBanner />

      <NewsGroupSection />

      <GoogleAIFooter />
    </main>
  );
};

export default HomePage;
