"use client";

import { useState, useEffect } from "react";
import GeminiHeader from "@/components/Gemini/GeminiHeader";
import JumpLinks from "@/components/Solution/JumpLinks";
import { useRouter } from "next/navigation";
import { CardData } from "@/components/Solution/Card";
import { CardGrid } from "@/components/Solution/CardGrid";
import SolutionGenerator from "@/components/Gemini/SolutionGenerator";
import FAQAccordion from "@/components/Solution/FAQAccordion";
import { TestimonialsSection } from "@/components/Solution/TestimonialsSection";

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
    { id: "Agent-Assist", label: "Agent Assist" },
    { id: "Testimonials", label: "Testimonials" },
    { id: "FAQs", label: "FAQs" },
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

  return (
    <main>
      <GeminiHeader
        title="Explore our services and solutions in"
        Logo="/logo/workplace.png"
        description="Bhobbi Workplace empowers enterprises to unlock greater value by combining AI-driven systems with strategic execution across marketing, sales, and customer engagement. By automating workflows, enhancing decision-making with data, and delivering personalised experiences at scale, it helps organisations operate more efficiently while accelerating growth. Whether it’s generating demand, improving conversion, or strengthening customer relationships, Bhobbi Workplace enables businesses to do more with less—turning complexity into streamlined, high-impact outcomes."
        className="py-8"
      />

      {/* Jump Links */}
      <div
        className={`sticky z-40 transition-all duration-300 ease-in-out ${
          navVisible ? "top-16" : "top-0"
        }`}
      >
        <JumpLinks links={links} defaultActive="AI-Powered" />
      </div>

      {/* Card Grid Section */}
      <section id="AI-Powered" className="scroll-mt-32 pt-8">
        <CardGrid
          cards={AiPoweredCards}
          title="Bhobbi Workplace AI-Powered Services"
          description="Smart AI systems that automate, optimise, and scale your marketing, sales, and customer experience."
        />
      </section>

      {/* Card Grid Section */}
      <section id="Specialty" className="scroll-mt-32 pt-8">
        <CardGrid
          cards={SpecialtyCards}
          title="Bhobbi Workplace Specialty Services"
          description="End-to-end digital, creative, and technical services designed to drive impactful brand growth."
        />
      </section>

      <section id="Chatbot" className="scroll-mt-32 py-8 sm:py-10 lg:py-12">
        <GeminiHeader title="Get a direct consultation" />
        <SolutionGenerator />
      </section>

      <section
        id="Testimonials"
        className="scroll-mt-32 py-8 sm:py-10 lg:py-12"
      >
        <TestimonialsSection />
      </section>

      <section id="FAQs" className="scroll-mt-32">
        <FAQAccordion />
      </section>
    </main>
  );
};

export default ServicePage;
