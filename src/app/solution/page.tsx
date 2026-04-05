"use client";

import { useState, useEffect } from "react";
import GeminiHeader from "@/components/Shared/GeminiHeader";
import ReusableCarousel from "@/components/Sections/EmblaCarousel";
import JumpLinks from "@/components/Shared/JumpLinks";
import { useRouter } from "next/navigation";
import { CardData } from "@/components/Shared/Card";

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
    { id: "workplace", label: "Workplace" },
    { id: "studio", label: "Studio" },
    { id: "lab", label: "Lab" },
  ];

  const AiPoweredCards: CardData[] = [
    {
      id: 1,
      title: "AI Marketing Automation",
      description:
        "Scale faster with less effort through always-on automated marketing.",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Marketing-Automation.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 2,
      title: "AI Creator & Media Systems",
      description: "Produce more content, faster and smarter.",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Creator-Media-Systems.webp",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 3,
      title: "AI Customer Experience",
      description:
        "Deliver seamless, personalised experiences that keep customers coming back.",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Customer-Experience.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 4,
      title: "AI Sales & Lead",
      description: "Convert more leads with less manual work.",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Sales-Lead Gen.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 5,
      title: "AI Content & Personalization",
      description: "Engage every audience with content that feels tailor-made.",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Content-Personalization.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 6,
      title: "AI Data & Intelligence",
      description: "Make smarter decisions with clear, actionable insights.",
      mediaType: "image",
      mediaSrc: "/solution-page-ai/AI-Data-Intelligence.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
  ];

  const SpecialtyCards: CardData[] = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Grow your brand and reach the right audience effectively.",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Digital-Marketing.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 2,
      title: "Content & Creative",
      description:
        "Stand out with content that captures attention and drives action.",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Content-Creative.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 3,
      title: "Events & Experiential",
      description: "Create meaningful experiences that people remember.",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Events-Experiential.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 4,
      title: "Web & Technical",
      description: "Build fast, reliable platforms that support your growth.",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Web-Technical.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 5,
      title: "Performance Marketing",
      description: "Maximise ROI with campaigns that deliver real results.",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/Performance-Marketing.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
    {
      id: 6,
      title: "CRM & Lifecycle Marketing",
      description:
        "Turn customers into loyal advocates through smarter engagement.",
      mediaType: "image",
      mediaSrc: "/solution-page-specialty/CRM-Lifecycle-Marketing.png",
      onClick: () => router.push("/"),
      linkText: "Services Offered",
    },
  ];

  const StudioCards: CardData[] = [
    {
      id: 1,
      title: "The next big thing?",
      mediaType: "local-video",
      mediaSrc: "/studio-and-lab/next-big-thing-landscape.mp4",
      onClick: () => router.push("/"),
      linkText: "Details in Q3 2026",
    },
    {
      id: 2,
      title: "A new form of entertainment...",
      mediaType: "local-video",
      mediaSrc: "/studio-and-lab/new-form-of-entertainment‑landscape.mp4",
      onClick: () => router.push("/"),
      linkText: "Details in Q3 2026",
    },
  ];

  const LabCards: CardData[] = [
    {
      id: 1,
      title: "Something industry-breaking...",
      mediaType: "local-video",
      mediaSrc: "/studio-and-lab/something-industry-breaking‑landscape.mp4",
      onClick: () => router.push("/"),
      linkText: "Coming Soon in Q3 2026",
    },
    {
      id: 2,
      title: "A New Breathtaking Experience..",
      mediaType: "image",
      mediaSrc: "/studio-and-lab/A-New-Breathtaking-Experience-horizontal.png",
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
        className={`sticky z-40 transition-all duration-300 ease-in-out  ${
          navVisible ? "top-16" : "top-0"
        }`}
      >
        <JumpLinks links={links} defaultActive="workplace" />
      </div>

      {/* Carousel */}
      <div className="space-y-12 py-4 lg:py-8">
        {/* Workplace Section */}
        <section id="workplace" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/workplace.png"
              alt="Workplace"
              className=" w-68 sm:w-72 lg:w-76 mb-2"
            />
          </div>
          <ReusableCarousel
            cards={AiPoweredCards}
            title="Bhobbi Workplace AI-Powered Services"
            description="Smart AI systems that automate, optimise, and scale your marketing, sales, and customer experience."
          />
          <ReusableCarousel
            cards={SpecialtyCards}
            title="Bhobbi Workplace Specialty Services"
            description="End-to-end digital, creative, and technical services designed to drive impactful brand growth."
          />
        </section>

        {/* Studio Section */}
        <section id="studio" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/studio.png"
              alt="Studio"
              className="w-44 sm:w-48 lg:w-52 mb-2"
            />
          </div>
          <ReusableCarousel
            cards={StudioCards}
            title="Bhobbi Studio"
            description="Original films and music that shape culture and elevate brand storytelling."
          />
        </section>

        {/* Lab Section */}
        <section id="lab" className="scroll-mt-28">
          <div className="mx-auto px-10 sm:px-12 lg:px-22 xl:px-26">
            <img
              src="/logo/lab.png"
              alt="Lab"
              className="w-24 sm:w-28 lg:w-32 mb-2"
            />
          </div>
          <ReusableCarousel
            cards={LabCards}
            title="Bhobbi Lab"
            description="Innovating the future through proprietary apps and exploration of emerging technologies."
          />
        </section>
      </div>
    </main>
  );
};

export default SolutionPage;
