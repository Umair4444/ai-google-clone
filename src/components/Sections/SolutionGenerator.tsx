"use client";

import { useState } from "react";
import { Shuffle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import LoadingAnimation from "../Shared/LoadingAnimation";

const prompts = [
  "Build a chatbot",
  "Generate custom images",
  "Summarize key information",
  "Support agents with AI",
  "Train a custom model",
];

const categories = [
  "AI & ML",
  "Data and Analytics",
  "Infrastructure",
  "Security",
  "Web & app hosting",
];

const SolutionGenerator = () => {
  const [input, setInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("AI & ML");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleGenerateSolution = async () => {
    if (!input.trim()) return;

    setIsLoading(true);

    // Simulate API call delay (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Prepare solution data (replace with actual API response)
    const solutionData = {
      title: `${input} Solution`,
      description: `A comprehensive solution for ${input.toLowerCase()} leveraging Google Cloud's AI and machine learning capabilities to deliver scalable and efficient results.`,
      steps: [
        "Analyze requirements and define success metrics",
        "Set up cloud infrastructure and APIs",
        "Design system architecture",
        "Implement core functionality",
        "Test and validate performance",
        "Deploy to production",
        "Monitor and optimize",
      ],
      technologies: [
        "Vertex AI",
        "Cloud Run",
        "BigQuery",
        "TensorFlow",
        "Node.js",
      ],
      image: "/flow-chart.png",
    };

    setIsLoading(false);

    // Navigate to results page with data
    router.push(
      `/solution-results?data=${encodeURIComponent(JSON.stringify(solutionData))}`,
    );
  };

  const handleSurpriseMe = () => {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setInput(randomPrompt);
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-7xl mx-auto p-4">
        <LoadingAnimation message="Generating your solution..." />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4 space-y-6">
      {/* TEXTAREA */}
      <div className="border rounded-xl p-4 shadow-sm bg-white">
        <textarea
          rows={5}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Briefly describe your use case or start with a popular one below"
          className="w-full resize-none outline-none text-sm md:text-base"
        />

        {/* ACTION BUTTONS */}
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={handleSurpriseMe}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
          >
            <Shuffle size={16} />
            Surprise me
          </button>

          <button
            onClick={handleGenerateSolution}
            disabled={!input.trim()}
            className="px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Generate solution
          </button>
        </div>
      </div>

      {/* DISCLAIMER */}
      <p className="text-xs md:text-sm text-gray-500">
        This service was built with Vertex AI. You must be 18+ to use it. Do not
        enter sensitive or personal information.
      </p>

      {/* CATEGORIES */}
      <div>
        <h3 className="text-sm md:text-base font-semibold mb-3">
          Popular use cases
        </h3>

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm md:text-base transition ${
                selectedCategory === cat
                  ? "bg-black text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* PROMPT CHIPS */}
      <div className="flex flex-wrap gap-2">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => setInput(prompt)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border bg-white hover:bg-gray-100 text-sm md:text-base"
          >
            <Sparkles size={14} />
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SolutionGenerator;
