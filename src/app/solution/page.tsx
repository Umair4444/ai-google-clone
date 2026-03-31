"use client";

import { useState, useEffect } from "react";
import GeminiHeader from "@/components/Gemini/GeminiHeader";
import ReusableCarousel, {
  CardData,
} from "@/components/Solution/EmblaCarousel";
import JumpLinks from "@/components/Solution/JumpLinks";
import { useRouter } from "next/navigation";

const SolutionPage = () => {
  const router = useRouter();
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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

  const StudioCards: CardData[] = [
    {
      id: 1,
      title: "The next big thing?",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Details in Q3 2026",
    },
    {
      id: 2,
      title: "A new form of entertainment...",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Details in Q3 2026",
    },
  ];

  const LabCards: CardData[] = [
    {
      id: 1,
      title: "Something industry-breaking...",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Coming Soon in Q3 2026",
    },
    {
      id: 2,
      title: "A New Breathtaking Experience..",
      mediaType: "youtube",
      mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
      poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Details in Q1 2027",
    },
  ];

  return (
    <main>
      {/* Header */}
      <GeminiHeader title="Explore our services and solutions" />

      {/* Jump Links */}
      <div
        className={`sticky z-40 transition-all duration-300 ease-in-out ${
          navVisible ? "top-12" : "-top-4"
        }`}
      >
        <JumpLinks links={links} defaultActive="Workplace" />
      </div>

      {/* Carousel */}
      <div className="space-y-12">
        {/* Workplace Section */}
        <section id="Workplace" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/workplace.png"
              alt="Workplace"
              className="h-12 w-auto mb-2"
            />
          </div>
          <ReusableCarousel cards={AiPoweredCards} title="AI-Powered" />
          <ReusableCarousel cards={SpecialtyCards} title="Specialty" />
        </section>

        {/* Studio Section */}
        <section id="Studio" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/studio.png"
              alt="Studio"
              className="h-12 w-auto mb-2"
            />
          </div>
          <ReusableCarousel cards={StudioCards} title="Coming Soon" />
        </section>

        {/* Lab Section */}
        <section id="Lab" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img src="/logo/lab.png" alt="Lab" className="h-12 w-auto mb-2" />
          </div>
          <ReusableCarousel cards={LabCards} title="Coming Soon" />
        </section>
      </div>
    </main>
  );
};

export default SolutionPage;
