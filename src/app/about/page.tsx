"use client";

import GeminiHeader from "@/components/Shared/GeminiHeader";
import JumpLinks from "@/components/Shared/JumpLinks";
import TextBlock from "@/components/Shared/TextBlock";
import VideoCard from "@/components/Shared/VideoCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { id: "enterprise-ai-adoption", label: "Enterprise AI-Adoption" },
  { id: "internet-of-agents", label: "Internet of Agents" },
  { id: "world-without-walls", label: "World Without Walls" },
  { id: "noble-non-profit-missions", label: "Noble Non-Profit Missions" },
  { id: "innovation-leadership", label: "Innovation Leadership" },
];

const AboutPage = () => {
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
  return (
    <main>
      {/* Header */}
      <GeminiHeader title="Making AI work in businesses and an impact to everyday lives" />

      {/* Video Section */}
      <VideoCard
        src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/applying-AI-to-help-solve_societys.mp4"
        autoPlay
        loop
        muted
        overlay
      />

      {/* Jump Links */}
      <div
        className={`sticky z-40 transition-all duration-300 ease-in-out ${
          navVisible ? "top-16" : "top-0"
        }`}
      >
        <JumpLinks links={links} defaultActive="enterprise-ai-adoption" />
      </div>

      {/* TextBlock  */}
      <TextBlock
        title="As AI redefines what’s possible, it also creates new ways to be helpful. Helping solve society’s challenges has always been core to our work."
        description="AI can be applied in ways that benefit humanity. Our mission is to demonstrate AI’s societal benefit by enabling real-world value, with projects spanning work in accessibility, science, education, economic impact, and society. We believe that the best way to drive positive change in underserved communities is by partnering with change-makers and the organizations they serve."
      />
    </main>
  );
};

export default AboutPage;
