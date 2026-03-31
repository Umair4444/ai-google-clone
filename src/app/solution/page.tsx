"use client";

import GeminiHeader from "@/components/Gemini/GeminiHeader";
import ReusableCarousel, {
  CardData,
} from "@/components/Solution/EmblaCarousel";
import JumpLinks from "@/components/Solution/JumpLinks";
import { useRouter } from "next/navigation";

const SolutionPage = () => {
  const router = useRouter();

  const links = [
    { id: "Workplace", label: "Workplace" },
    { id: "Studio", label: "Studio" },
    { id: "Lab", label: "Lab" },
  ];

  const AiPoweredCards: CardData[] = [
    {
      id: 1,
      title: "AI Marketing Automation",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 2,
      title: "AI Creator & Media Systems",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 3,
      title: "AI Customer Experience",
      mediaType: "image",
      mediaSrc:
        "https://lh3.googleusercontent.com/qOGRL1iErYg6PCYkYuE25PaJrapNG6fG1jhLAdhhIB5a6fvQ3a7NHTBGwsTzxSF9XboSQZgA3_l-jbEZrzOrsWRfvmCrNO-waY5tjtOIBBNAEDgxEw=w1440-h1080-n-nu",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 4,
      title: "AI Sales & Lead",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 5,
      title: "AI Content & Personalization",
      mediaType: "local-video",
      mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 6,
      title: "AI Data & Intelligence",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
  ];

  const SpecialtyCards: CardData[] = [
    {
      id: 1,
      title: "Digital Marketing",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 2,
      title: "Content & Creative",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 3,
      title: "Events & Experiential",
      mediaType: "image",
      mediaSrc:
        "https://lh3.googleusercontent.com/qOGRL1iErYg6PCYkYuE25PaJrapNG6fG1jhLAdhhIB5a6fvQ3a7NHTBGwsTzxSF9XboSQZgA3_l-jbEZrzOrsWRfvmCrNO-waY5tjtOIBBNAEDgxEw=w1440-h1080-n-nu",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 4,
      title: "Web & Technical",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 5,
      title: "Performance Marketing",
      mediaType: "local-video",
      mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 6,
      title: "CRM & Lifecycle Marketing",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
  ];

  return (
    <main>
      {/* Header */}
      <GeminiHeader title="Explore our services and solutions" />

      {/* Jump Links */}
      <JumpLinks links={links} defaultActive="Workplace" />

      {/* Carousel */}
      <ReusableCarousel cards={AiPoweredCards} title="AI-Powered" />
    </main>
  );
};

export default SolutionPage;
