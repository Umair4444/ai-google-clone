"use client";

import GeminiHeader from "@/components/Gemini/GeminiHeader";
import JumpLinks from "@/components/Solution/JumpLinks";
import VideoSection from "@/components/VideoSection";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { id: "Workplace", label: "Enterprise AI-Adoption" },
  { id: "Studio", label: "Internet of Agents" },
  { id: "Lab", label: "World Without Walls" },
  { id: "Lab", label: "Noble Non-Profit Missions" },
  { id: "Lab", label: "Innovation Leadership" },
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
      <VideoSection
        src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/applying-AI-to-help-solve_societys.mp4"
        autoPlay
        loop
        muted
        overlay
      />

      {/* Jump Links */}
      <div
        className={`sticky z-40 transition-all duration-300 ease-in-out py-8 ${
          navVisible ? "top-16" : "top-0"
        }`}
      >
        <JumpLinks links={links} defaultActive="Enterprise AI-Adoption" />
      </div>
    </main>
  );
};

export default AboutPage;
