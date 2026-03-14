"use client";

import React, { useState } from "react";
import BannerCard from "@/components/Gemini/BannerCard";
import ModalCard from "@/components/Gemini/ModalCard";

interface BannerCardType {
  title: string;
  description?: string;
  image: string;
  modalId?: string;
  link?: string;
}

// Define the shape of each inner card in the modal
interface ModalInnerCard {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  buttonLink: string;
}

// Map modalId → array of cards (dynamic data source)
const modalData: Record<string, ModalInnerCard[]> = {
  "modal-1": [
    // For creativity
    {
      title: "Veo 3.1 Video Generation",
      subtitle: "Create cinematic videos with audio",
      description:
        "Turn text or images into expressive videos with native sound, character consistency, and vertical support for Shorts.",
      imageUrl:
        "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
      buttonText: "Try Veo in Gemini",
      buttonLink: "https://gemini.google.com/veo",
    },
    {
      title: "Nano Banana 2 Image Creation",
      subtitle: "Advanced image gen with templates",
      description:
        "Generate high-quality images powered by world knowledge, styles, and reference templates.",
      imageUrl:
        "https://images.unsplash.com/photo-1547891654-e66ed7eb9688?w=800",
      buttonText: "Generate Images",
      buttonLink: "https://gemini.google.com/app",
    },
    {
      title: "Whisk & Flow Tools",
      subtitle: "Creative prototyping & filmmaking",
      description:
        "Rapid idea visualization and professional video editing workflows powered by latest AI.",
      imageUrl:
        "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800",
      buttonText: "Explore Creative Labs",
      buttonLink: "https://labs.google/",
    },
  ],
  "modal-2": [
    // For knowledge
    {
      title: "Deep Research Mode",
      subtitle: "Autonomous in-depth answers",
      description:
        "Gemini searches sources, synthesizes info, and delivers organized reports with citations.",
      imageUrl:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      buttonText: "Start Research",
      buttonLink: "https://gemini.google.com/",
    },
    {
      title: "Interactive Explanations",
      subtitle: "Break down complex topics",
      description:
        "Get visual, step-by-step breakdowns of science, history, math and more.",
      imageUrl:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      buttonText: "Ask Anything",
      buttonLink: "https://gemini.google.com/",
    },
  ],
  "modal-3": [
    // For productivity
    {
      title: "Gemini in Workspace",
      subtitle: "Docs, Sheets, Slides & Drive",
      description:
        "Create full drafts from your files/emails, build smart spreadsheets, and design presentations faster.",
      imageUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      buttonText: "Try in Docs",
      buttonLink: "https://workspace.google.com/",
    },
    {
      title: "Help Me Create",
      subtitle: "From prompt to formatted doc",
      description:
        "Describe what you need — Gemini pulls context from Gmail, Drive, Chat and web to build it.",
      imageUrl:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      buttonText: "Get Started",
      buttonLink: "https://workspace.google.com/",
    },
    {
      title: "Gemini Live Integration",
      subtitle: "Voice + Calendar/Tasks/Keep",
      description:
        "Stay organized on the go with real-time voice assistance connected to your Google apps.",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-bf19c9d1087f?w=800",
      buttonText: "Try Gemini Live",
      buttonLink: "https://gemini.google.com/",
    },
    {
      title: "Gemini in Workspace",
      subtitle: "Docs, Sheets, Slides & Drive",
      description:
        "Create full drafts from your files/emails, build smart spreadsheets, and design presentations faster.",
      imageUrl:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800",
      buttonText: "Try in Docs",
      buttonLink: "https://workspace.google.com/",
    },
    {
      title: "Help Me Create",
      subtitle: "From prompt to formatted doc",
      description:
        "Describe what you need — Gemini pulls context from Gmail, Drive, Chat and web to build it.",
      imageUrl:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800",
      buttonText: "Get Started",
      buttonLink: "https://workspace.google.com/",
    },
    {
      title: "Gemini Live Integration",
      subtitle: "Voice + Calendar/Tasks/Keep",
      description:
        "Stay organized on the go with real-time voice assistance connected to your Google apps.",
      imageUrl:
        "https://images.unsplash.com/photo-1555066931-bf19c9d1087f?w=800",
      buttonText: "Try Gemini Live",
      buttonLink: "https://gemini.google.com/",
    },
  ],
  "modal-4": [
    // For students
    {
      title: "Personalized Study Tools",
      subtitle: "Quizzes, flashcards & guides",
      description:
        "Turn your notes into custom practice quizzes, flashcards, and exam prep with Gemini 3.1 Pro.",
      imageUrl:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800",
      buttonText: "Start Studying",
      buttonLink: "https://gemini.google.com/students",
    },
    {
      title: "Unlimited Image Uploads",
      subtitle: "Analyze homework & notes",
      description:
        "Upload photos of problems, lectures or textbooks for instant explanations and help.",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      buttonText: "Upload & Learn",
      buttonLink: "https://gemini.google.com/students",
    },
    {
      title: "SAT Practice & Summaries",
      subtitle: "Free Princeton Review tests",
      description:
        "Generate practice SATs, summarize progress, and get assignment help.",
      imageUrl:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
      buttonText: "Prep for Exams",
      buttonLink: "https://gemini.google.com/",
    },
  ],
  "modal-5": [
    // For experimenting
    {
      title: "Google Labs Experiments",
      subtitle: "Try cutting-edge AI tools",
      description:
        "Explore Pomelli (marketing), Opal (mini-apps), Disco (tab workspaces), and more.",
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
      buttonText: "Visit Labs",
      buttonLink: "https://labs.google/",
    },
    {
      title: "Gemini API Playground",
      subtitle: "Test models & prompts",
      description:
        "Experiment with Veo, Imagen, Gemini models — generate code, media, and prototypes.",
      imageUrl:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      buttonText: "Open Playground",
      buttonLink: "https://aistudio.google.com/",
    },
  ],
};

const ExploreBanner: React.FC = () => {
  const [modals, setModals] = useState<Record<string, boolean>>({
    "modal-1": false,
    "modal-2": false,
    "modal-3": false,
    "modal-4": false,
    "modal-5": false,
  });

  const toggleModal = (modalId: string) => {
    setModals((prev) => ({ ...prev, [modalId]: !prev[modalId] }));
  };

  const bannerCards: BannerCardType[] = [
    {
      title: "Workflow Automation",
      // description: "Unleash your imagination with AI-powered creation tools",
      image:
        "https://images.unsplash.com/photo-1758543102367-da8b00ddf4da?w=600&auto=format&fit=crop&q=60",
      modalId: "modal-1",
    },
    {
      title: "Marketing Generalist",
      // description: "Explore, learn, and understand complex topics faster",
      image:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80",
      modalId: "modal-2",
    },
    {
      title: "Specialised Services",
      // description:
      //   "Get more done with intelligent assistance across your workflow",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80",
      modalId: "modal-3",
    },
    {
      title: "Digital Solutions",
      // description: "Study smarter with personalized learning support",
      image:
        "https://plus.unsplash.com/premium_photo-1674582743901-7e438e0e5ea0?w=600&auto=format&fit=crop&q=60",
      modalId: "modal-4",
    },
    {
      title: "AI Streamer/Influencer",
      // description: "Play, test, and discover new AI capabilities",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
      modalId: "modal-5",
    },
    {
      title: "AI Chatbots",
      // description: "Discover the complete Gemini ecosystem",
      image:
        "https://images.unsplash.com/photo-1757310998309-87a97e562ee5?w=600&auto=format&fit=crop&q=60",
      link: "/products/",
    },
  ];

  return (
    <div className="px-4 py-12 sm:py-16 mx-auto container">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium mb-10 sm:mb-12">
        Explore what's possible
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
        {bannerCards.map((card, index) => (
          <BannerCard
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            modalId={card.modalId}
            link={card.link}
            onClick={() => card.modalId && toggleModal(card.modalId)}
            disableHover={index === bannerCards.length - 1}
          />
        ))}
      </div>

      {/* Modals - now pulling dynamic data */}
      {bannerCards
        .filter((card) => card.modalId)
        .map(
          (card, index) =>
            modals[card.modalId!] && (
              <ModalCard
                key={index}
                title={card.title}
                description={card.description}
                onClose={() => toggleModal(card.modalId!)}
              >
                {/* Dynamically render cards from modalData */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {modalData[card.modalId!]?.map((innerCard, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {innerCard.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                        {innerCard.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {innerCard.description}
                      </p>
                      <img
                        src={innerCard.imageUrl}
                        alt={innerCard.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <a
                        href={innerCard.buttonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium"
                      >
                        {innerCard.buttonText} →
                      </a>
                    </div>
                  ))}
                </div>
              </ModalCard>
            ),
        )}
    </div>
  );
};

export default ExploreBanner;
