import GeminiHeader from "@/components/Gemini/GeminiHeader";
import GetStarted from "@/components/Gemini/GetStarted";
import ExploreBanner from "@/components/Gemini/ExploreBanner";
import NewsGroupSection from "@/components/Gemini/NewsGroupSection";
import SolutionGenerator from "@/components/Gemini/SolutionGenerator";

const HomePage = () => {
  return (
    <main>
      <GeminiHeader title="What are you looking to automate?" />

      <SolutionGenerator />

      <GetStarted />

      <ExploreBanner />

      <NewsGroupSection />
    </main>
  );
};

export default HomePage;
