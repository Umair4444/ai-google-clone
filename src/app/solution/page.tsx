"use client";

import { useState, useEffect } from "react";
import GeminiHeader from "@/components/Gemini/GeminiHeader";
import ReusableCarousel from "@/components/Solution/EmblaCarousel";
import JumpLinks from "@/components/Solution/JumpLinks";
import { useRouter } from "next/navigation";
import { CardData } from "@/components/Solution/Card";

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
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Marketing-Automation.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 2,
      title: "AI Creator & Media Systems",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Creator-Media-Systems.webp",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 3,
      title: "AI Customer Experience",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Customer-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 4,
      title: "AI Sales & Lead",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Sales-Lead Gen.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 5,
      title: "AI Content & Personalization",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Content-Personalization.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 6,
      title: "AI Data & Intelligence",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Data-Intelligence.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
  ];

  const SpecialtyCards: CardData[] = [
    {
      id: 1,
      title: "Digital Marketing",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Digital-Marketing.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 2,
      title: "Content & Creative",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Content-Creative.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 3,
      title: "Events & Experiential",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Events-Experiential.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 4,
      title: "Web & Technical",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Web-Technical.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 5,
      title: "Performance Marketing",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Performance-Marketing.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
    {
      id: 6,
      title: "CRM & Lifecycle Marketing",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/CRM-Lifecycle-Marketing.png",
      onClick: () => router.push("/"),
      linkText: "Learn More",
    },
  ];

  const StudioCards: CardData[] = [
    {
      id: 1,
      title: "The next big thing?",
      mediaType: "local-video",
      mediaSrc: "/studio-and-lab/next-big-thing-landscape.mp4",
      poster: "/studio-and-lab/",
      onClick: () => router.push("/"),
      linkText: "Details in Q3 2026",
    },
    {
      id: 2,
      title: "A new form of entertainment...",
      mediaType: "youtube",
      mediaSrc: "/studio-and-lab/new-form-of-entertainment-landscape.mp4",
      onClick: () => router.push("/"),
      linkText: "Details in Q3 2026",
    },
  ];

  const LabCards: CardData[] = [
    {
      id: 1,
      title: "Something industry-breaking...",
      mediaType: "local-video",
      mediaSrc: "/everything-we-do/ai-and-everything.mp4",
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
      <GeminiHeader
        title={
          <>
            Explore our AI optimisation{" "}
            <span className="block"> Solutions and innovation</span>
          </>
        }
        description="Bhobbi combines AI optimisation with creative innovation across three core pillars — Bhobbi Workplace, Bhobbi Studio, and Bhobbi Lab. From AI-powered systems in marketing, sales, and customer experience to digital, events, and technical services, Bhobbi Workplace help businesses scale efficiently. Bhobbi Studio produces original films and music, while Bhobbi Lab builds future-ready apps and explores emerging technologies like virtual worlds. Together, these solutions form an integrated ecosystem designed to help brands adapt, innovate, and lead in an AI-driven world."
      />

      {/* Jump Links */}
      <div
        className={`sticky z-40 transition-all duration-300 ease-in-out ${
          navVisible ? "top-16" : "top-0"
        }`}
      >
        <JumpLinks links={links} defaultActive="Workplace" />
      </div>

      {/* Carousel */}
      <div className="space-y-12 py-4">
        {/* Workplace Section */}
        <section id="Workplace" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/workplace.png"
              alt="Workplace"
              className=" w-68 sm:w-72 lg:w-76 mb-2"
            />
          </div>
          <ReusableCarousel
            cards={AiPoweredCards}
            title="AI-Powered Services"
          />
          <ReusableCarousel cards={SpecialtyCards} title="Specialty Services" />
        </section>

        {/* Studio Section */}
        <section id="Studio" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/studio.png"
              alt="Studio"
              className="w-44 sm:w-48 lg:w-52 mb-2"
            />
          </div>
          <ReusableCarousel cards={StudioCards} title="Coming Soon" />
        </section>

        {/* Lab Section */}
        <section id="Lab" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/lab.png"
              alt="Lab"
              className="w-24 sm:w-28 lg:w-32 mb-2"
            />
          </div>
          <ReusableCarousel cards={LabCards} title="Coming Soon" />
        </section>
      </div>
    </main>
  );
};

export default SolutionPage;
