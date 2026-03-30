import GeminiHeader from "@/components/Gemini/GeminiHeader";
import EmblaCarousel from "@/components/Solution/EmblaCarousel";
import JumpLinks from "@/components/Solution/JumpLinks";

const SolutionPage = () => {
  const links = [
    { id: "Workplace", label: "Workplace" },
    { id: "Studio", label: "Studio" },
    { id: "Lab", label: "Lab" },
  ];
  return (
    <main>
      <GeminiHeader title="Explore our services and solutions" />
      <JumpLinks links={links} defaultActive="Workplace" />;
      <EmblaCarousel />
    </main>
  );
};

export default SolutionPage;
