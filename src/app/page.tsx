import GeminiHeader from "@/components/Shared/GeminiHeader";
import GetStarted from "@/components/Sections/GetStarted";
import ExploreBanner from "@/components/Sections/ExploreBanner";
import NewsGroupSection from "@/components/Sections/NewsGroupSection";
import SolutionGenerator from "@/components/Sections/SolutionGenerator";

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
