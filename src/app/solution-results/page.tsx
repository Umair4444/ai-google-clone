"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft, Download, Share2, Copy, Check, X } from "lucide-react";

interface SolutionData {
  title: string;
  description: string;
  steps: string[];
  technologies: string[];
  image?: string;
}

const SolutionResultsContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const solutionData: SolutionData | null = searchParams.get("data")
    ? JSON.parse(decodeURIComponent(searchParams.get("data")!))
    : null;

  const mockSolution: SolutionData = {
    title: "AI-Powered Chatbot Solution",
    description:
      "A comprehensive chatbot solution leveraging Google's Vertex AI and natural language processing to provide intelligent customer support automation.",
    steps: [
      "Define user requirements and conversation flows",
      "Set up Vertex AI environment and APIs",
      "Design conversation architecture and intents",
      "Implement natural language understanding",
      "Build response generation system",
      "Integrate with messaging platforms",
      "Test and optimize performance",
      "Deploy and monitor continuously",
    ],
    technologies: [
      "Vertex AI",
      "Dialogflow",
      "Cloud Functions",
      "Firestore",
      "Node.js",
    ],
    image: "/flow-chart.png", // make sure this exists in /public folder
  };

  const data = solutionData || mockSolution;

  const handleCopy = () => {
    navigator.clipboard.writeText(data.description);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBack = () => router.push("/");

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
          >
            <ArrowLeft size={18} /> Back
          </button>

          <div className="flex items-center gap-2 bg-white/50 backdrop-blur-md border border-white/30 rounded-full px-2 py-1 shadow-sm">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Share2 size={18} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Download size={18} />
            </button>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-100 rounded-full transition"
            >
              {copied ? (
                <Check size={18} className="text-green-600" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left: Content */}
          <div className="space-y-8 col-span-2">
            <div>
              <h1 className="text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                {data.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                {data.description}
              </p>
            </div>

            {/* Steps */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                Implementation Steps
              </h3>
              <div className="space-y-4">
                {data.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 group hover:translate-x-1 transition-transform"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm font-medium">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 group-hover:text-black transition">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full bg-white border text-sm text-gray-700 hover:bg-gray-100 transition cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image Preview */}
          <div className="lg:sticky lg:top-24">
            <div
              onClick={() => setIsOpen(true)}
              className="relative rounded-2xl border border-white/20 bg-white/40 backdrop-blur-lg shadow-lg p-4 cursor-zoom-in group hover:scale-[1.03] transition-transform min-h-[220px] flex flex-col"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Solution Preview
              </h3>

              {data.image ? (
                <div className="w-full h-[400px] flex items-center justify-center overflow-hidden relative">
                  <Image
                    src={data.image}
                    alt="Flowchart preview of the solution"
                    fill
                    className="object-contain rounded-xl shadow-sm"
                  />
                </div>
              ) : (
                <div className="w-full h-[400px] flex items-center justify-center text-gray-400 italic">
                  No image available
                </div>
              )}

              <div className="absolute bottom-2 right-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                Click to enlarge
              </div>
            </div>
          </div>
        </div>

        {/* Full-screen Modal */}
        {isOpen && data.image && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative max-w-5xl w-full h-[85vh] sm:h-[90vh] p-4 sm:p-6">
              <Image
                src={data.image}
                alt="Full flowchart of the solution"
                fill
                className="object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-red-400/10 hover:bg-red-400/20 text-red-400 transition-all duration-200 z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

const SolutionResultsPage = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <SolutionResultsContent />
    </Suspense>
  );
};

export default SolutionResultsPage;
