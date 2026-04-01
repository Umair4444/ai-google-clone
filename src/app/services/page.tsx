"use client";

import { useState, useEffect } from "react";
import GeminiHeader from "@/components/Gemini/GeminiHeader";
import ReusableCarousel from "@/components/Solution/EmblaCarousel";
import JumpLinks from "@/components/Solution/JumpLinks";
import { useRouter } from "next/navigation";
import { CardData } from "@/components/Solution/Card";
import { CardGrid } from "@/components/Solution/CardGrid";

const ServicePage = () => {
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
    { id: "AI-Powered", label: "AI-Powered" },
    { id: "Specialty", label: "Specialty" },
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
      mediaType: "youtube",
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
      mediaType: "youtube",
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
      <GeminiHeader
        title="Explore our services and solutions in"
        Logo="/logo/workplace.png"
        description="We're building AI skills programs, trainings, and tools to address the specific needs of workers everywhere. Discover Google's courses and resources designed to help you succeed in an AI-driven world."
        className="py-8"
      />

      {/* Jump Links */}
      <div
        className={`sticky z-40 transition-all duration-300 ease-in-out ${
          navVisible ? "top-12" : "-top-4"
        }`}
      >
        <JumpLinks links={links} defaultActive="AiPoweredCards" />
      </div>

      {/* Card Grid Section */}
      <section id="CardGrid" className="scroll-mt-28">
        <CardGrid cards={AiPoweredCards} title="AI-Powered Solutions" />
      </section>
    </main>
  );
};

export default ServicePage;
