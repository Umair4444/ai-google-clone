"use client";

import CardSection, {
  CardItem as CardSectionItem,
} from "@/components/Sections/CardSection";
import FeatureGroup, { CardItem } from "@/components/Sections/FeatureGroup";
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

export const EnterpriseAIAdoptionCards: CardItem[] = [
  {
    title: "Your Integration Roadmap",
    description:
      "AI should not be an experiment—it should be embedded into how businesses operate. We envision a future where organizations seamlessly integrate AI into their workflows, decision-making, and customer experiences to drive real, measurable outcomes.",
    imageSrc: "/about-us/Your-Integration-Roadmap.png",
    link: "/",
  },
  {
    title: "Practical, Scalable Implementation",
    description:
      "At Bhobbi, we focus on making AI adoption practical and scalable. From strategy to implementation, we help businesses move beyond hype and into meaningful transformation that delivers long-term value.",
    imageSrc: "/about-us/Practical-Scalable-Implementation.png",
    link: "/",
  },
];

export const InternetofAgentsCards: CardItem[] = [
  {
    title: "Autonomous Systems, Working Together",
    description:
      "The future of technology is not just connected systems, but intelligent agents working together. We see a world where autonomous AI agents collaborate across platforms, executing tasks, making decisions, and continuously optimizing outcomes.",
    imageSrc: "/about-us/Autonomous-Systems-Working-Together.png",
    link: "/",
  },
  {
    title: "Orchestrating Intelligent Workflows",
    description:
      "Bhobbi is building toward this vision—where businesses leverage networks of AI agents to automate processes, enhance productivity, and unlock new possibilities that were previously out of reach.",
    imageSrc: "/about-us/Orchestrating-Intelligent-Workflows.png",
    link: "/",
  },
];

export const WorldWithoutWallsCards: CardItem[] = [
  {
    title: "Breaking Barriers Through Technology",
    description:
      "We believe technology should remove barriers, not create them. A world without walls is one where ideas, opportunities, and capabilities flow freely across borders, industries, and systems.",
    imageSrc: "/about-us/Breaking-Barriers-Through-Technology.png",
    link: "/",
  },
  {
    title: "Connecting People, Platforms, and Possibilities",
    description:
      "Through AI and digital innovation, we aim to help businesses operate without limitations—connecting people, platforms, and possibilities in ways that drive inclusivity, accessibility, and global growth.",
    imageSrc: "/about-us/Connecting-People-Platforms-Possibilities.png",
    link: "/",
  },
];

const NobleNonProfitMissionsCards: CardSectionItem[] = [
  {
    title: "Noble Non-Profit Missions",
    description:
      "Progress in AI should uplift every sector of society. We keep non-profit missions firmly in our sights by exploring and shaping new possibilities that empower the less fortunate to be engaged, inspired, and play a deeper impact in this society we live.",
    imageSrc: "/about-us/Non-Profit-Missions.png",
    link: "/",
  },
];

const InnovationLeadershipCards: CardSectionItem[] = [
  {
    title: "Innovation Leadership",
    description:
      "We believe in leading from the front—continuously exploring, building, and applying emerging technologies. Through innovation, experimentation, and forward-thinking strategies, we strive to shape what’s next and help our partners stay ahead in a rapidly evolving digital landscape.",
    imageSrc: "/about-us/Innovation-Leadership.png",
    link: "/",
  },
];

const AboutPage = () => {
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
      <section className="px-4 md:px-8 lg:px-16">
        <VideoCard
          src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/applying-AI-to-help-solve_societys.mp4"
          autoPlay
          loop
          muted
          overlay
        />
      </section>

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
        title="We turn the promise of AI into real-world impact for businesses and everyday lives"
        description="At Bhobbi, we believe AI should do more than exist—it should work. We help businesses turn AI into practical solutions that streamline operations, enhance marketing, and unlock new growth opportunities. By bridging strategy with execution, we make advanced technology accessible and impactful, not just for organizations, but for the people they serve every day."
      />

      <div className="py-4 lg:py-8">
        {/* EnterpriseAIAdoption Feature Group */}
        <section id="enterprise-ai-adoption" className="scroll-mt-32">
          <FeatureGroup
            title="Enterprise AI-Adoption"
            items={EnterpriseAIAdoptionCards}
          />
        </section>

        {/* InternetofAgentsCards Feature Group */}
        <section id="internet-of-agents" className="scroll-mt-32">
          <FeatureGroup
            title="Internet of Agents"
            items={InternetofAgentsCards}
          />
        </section>

        {/* WorldWithoutWalls Feature Group */}
        <section id="world-without-walls" className="scroll-mt-32">
          <FeatureGroup
            title="World Without Walls"
            items={WorldWithoutWallsCards}
          />
        </section>
      </div>

      <div className="py-4 lg:py-8">
        <section id="noble-non-profit-missions" className="scroll-mt-32">
          <CardSection
            id="noble-non-profit-missions"
            title="Noble Non-Profit Missions"
            buttonText="Enterprise AI-Adoption"
            cards={NobleNonProfitMissionsCards}
          />
        </section>

        <section id="innovation-leadership" className="scroll-mt-32">
          <CardSection
            id="innovation-leadership"
            title="Innovation Leadership"
            buttonText="Enterprise AI-Adoption"
            cards={InnovationLeadershipCards}
          />
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
