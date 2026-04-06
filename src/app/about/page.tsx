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
    title: "Monk Skin Tone",
    description:
      "In partnership with Harvard professor and sociologist Dr. Ellis Monk, Google released a new skin tone scale designed to be more inclusive of the spectrum of skin tones we see in our society. The Monk Skin Tone Scale will help train AI models for fairness, resulting in features and products that work better for people of all skin tones.",
    imageSrc:
      "https://lh3.googleusercontent.com/yKCgbrVBJRfmKqv2DNtyJ8drmkeFHekF_NlMVzsGVMHapX0cZ34EWdI0LOwOSK5VuiYfuRNDgytmhJuKT8tHOfq4M-ViiibbVje6WQp6GtExAoDtPg=w1440-h810-n-nu",
    link: "https://blog.google/products/search/monk-skin-tone-scale/?utm_source=ai.google&utm_medium=referral",
  },
  {
    title: "Language Inclusion",
    description:
      "There are over 7,000 languages spoken around the world. Google built an AI model to help people connect and better understand the world around them, ensuring diverse languages are represented online.",
    videoSrc:
      "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/SearchTranslate_Hero_FsEthYV.mp4#t=0.1",
    link: "https://blog.google/products/translate/google-translate-new-languages-2024/?utm_source=ai.google&utm_medium=referral",
  },
];

export const InternetofAgentsCards: CardItem[] = [
  {
    title: "Monk Skin Tone",
    description:
      "In partnership with Harvard professor and sociologist Dr. Ellis Monk, Google released a new skin tone scale designed to be more inclusive of the spectrum of skin tones we see in our society. The Monk Skin Tone Scale will help train AI models for fairness, resulting in features and products that work better for people of all skin tones.",
    imageSrc:
      "https://lh3.googleusercontent.com/yKCgbrVBJRfmKqv2DNtyJ8drmkeFHekF_NlMVzsGVMHapX0cZ34EWdI0LOwOSK5VuiYfuRNDgytmhJuKT8tHOfq4M-ViiibbVje6WQp6GtExAoDtPg=w1440-h810-n-nu",
    link: "https://blog.google/products/search/monk-skin-tone-scale/?utm_source=ai.google&utm_medium=referral",
  },
  {
    title: "Language Inclusion",
    description:
      "There are over 7,000 languages spoken around the world. Google built an AI model to help people connect and better understand the world around them, ensuring diverse languages are represented online.",
    videoSrc:
      "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/SearchTranslate_Hero_FsEthYV.mp4#t=0.1",
    link: "https://blog.google/products/translate/google-translate-new-languages-2024/?utm_source=ai.google&utm_medium=referral",
  },
];

export const WorldWithoutWallsCards: CardItem[] = [
  {
    title: "Monk Skin Tone",
    description:
      "In partnership with Harvard professor and sociologist Dr. Ellis Monk, Google released a new skin tone scale designed to be more inclusive of the spectrum of skin tones we see in our society. The Monk Skin Tone Scale will help train AI models for fairness, resulting in features and products that work better for people of all skin tones.",
    imageSrc:
      "https://lh3.googleusercontent.com/yKCgbrVBJRfmKqv2DNtyJ8drmkeFHekF_NlMVzsGVMHapX0cZ34EWdI0LOwOSK5VuiYfuRNDgytmhJuKT8tHOfq4M-ViiibbVje6WQp6GtExAoDtPg=w1440-h810-n-nu",
    link: "https://blog.google/products/search/monk-skin-tone-scale/?utm_source=ai.google&utm_medium=referral",
  },
  {
    title: "Language Inclusion",
    description:
      "There are over 7,000 languages spoken around the world. Google built an AI model to help people connect and better understand the world around them, ensuring diverse languages are represented online.",
    videoSrc:
      "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/SearchTranslate_Hero_FsEthYV.mp4#t=0.1",
    link: "https://blog.google/products/translate/google-translate-new-languages-2024/?utm_source=ai.google&utm_medium=referral",
  },
];

const EconomicOpportunityCards: CardSectionItem[] = [
  {
    title: "50 states, 50 stories of AI transformation",
    description:
      "There are 34 million small businesses in the U.S. Explore these 50 stories from 50 states to inspire creative ways to use AI in Google Workspace.",
    link: "https://workspace.google.com/ai/customers/?utm_source=ai.google&utm_medium=referral",
    videoSrc:
      "https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/applying-AI-to-help-solve_societys.mp4",
    poster: "https://via.placeholder.com/720x405.png?text=Video+Poster",
  },
];

const HealthcareCards: CardSectionItem[] = [
  {
    title: "Helping Oklahomans upskill with AI",
    description:
      "We’re expanding the Grow with Google initiative in Oklahoma by offering free AI training to over 10,000 residents through the Google AI Essentials course.",
    link: "https://grow.google/ai-essentials/?utm_source=google&utm_medium=owned&utm_campaign=ai-launch__geo--US&utm_content=owned",
    imageSrc:
      "https://lh3.googleusercontent.com/YPKb37vEKWjVFcIf58MoE5BIFQ6eQ6z2pX6dxG2c0-iEZ6VKm-r4EN8fHEhMvWJBf_XePnqcH_Y6JxRUzsIQW3-TP8V9GfAciOR0SCUO4LX9A6p5hbQ=w1440-h810-n-nu",
  },
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
        title="As AI redefines what’s possible, it also creates new ways to be helpful. Helping solve society’s challenges has always been core to our work."
        description="AI can be applied in ways that benefit humanity. Our mission is to demonstrate AI’s societal benefit by enabling real-world value, with projects spanning work in accessibility, science, education, economic impact, and society. We believe that the best way to drive positive change in underserved communities is by partnering with change-makers and the organizations they serve."
      />

      {/* EnterpriseAIAdoption Feature Group */}
      <section id="enterprise-ai-adoption" className="scroll-mt-32">
        <FeatureGroup
          title="Our Commitment to Inclusion"
          subtitle="We are dedicated to creating AI that serves everyone, everywhere."
          items={EnterpriseAIAdoptionCards}
        />
      </section>

      {/* InternetofAgentsCards Feature Group */}
      <section id="internet-of-agents" className="scroll-mt-32">
        <FeatureGroup
          title="Our Commitment to Inclusion"
          subtitle="We are dedicated to creating AI that serves everyone, everywhere."
          items={InternetofAgentsCards}
        />
      </section>

      {/* WorldWithoutWalls Feature Group */}
      <section id="world-without-walls" className="scroll-mt-32">
        <FeatureGroup
          title="Our Commitment to Inclusion"
          subtitle="We are dedicated to creating AI that serves everyone, everywhere."
          items={WorldWithoutWallsCards}
        />
      </section>

      <section id="noble-non-profit-missions" className="scroll-mt-32">
        <CardSection
          id="economic-opportunity"
          title="Economic Opportunity"
          subtitle="Bolstering potential through AI skilling"
          buttonText="More AI applications for health"
          cards={EconomicOpportunityCards}
        />
      </section>

      <section id="innovation-leadership" className="scroll-mt-32">
        <CardSection
          id="healthcare"
          title="Healthcare"
          subtitle="Bolstering potential through AI skilling"
          buttonText="More AI applications for health"
          cards={HealthcareCards}
        />
      </section>
    </main>
  );
};

export default AboutPage;
