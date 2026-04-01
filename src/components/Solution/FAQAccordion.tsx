"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "Why are AI skills important?",
    answer: (
      <>
        <p>
          Artificial intelligence (AI) is reshaping how we work. Learning AI
          skills helps future-proof your career, boosts productivity, and opens
          new opportunities.
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          85% of learners say AI learning helps build expertise and stay ahead
          of competition.
        </p>
      </>
    ),
  },
  {
    question:
      "How do I know which Google AI course or credential is right for me?",
    answer: (
      <p>
        Start with beginner resources like AI Essentials if you're new. Then
        move to specialized certifications based on your career goals.
      </p>
    ),
  },
  {
    question:
      "What is the difference between a certificate and a certification?",
    answer: (
      <p>
        Certificates focus on practical skills and are shorter. Certifications
        validate deeper expertise and usually require exams.
      </p>
    ),
  },
  {
    question: "Where can I learn more about Google’s AI learning resources?",
    answer: (
      <p>
        Explore Google Skills and Grow with Google for courses, learning paths,
        and AI tools to boost your career.
      </p>
    ),
  },
  {
    question: "Do Google Cloud AI learning resources cost money?",
    answer: (
      <p>
        Some resources are free, while others are paid. Google also offers free
        credits and subscriptions for deeper learning.
      </p>
    ),
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-16 xl:px-20">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-semibold">FAQs</h3>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;

          return (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden transition-all"
            >
              {/* Header */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-4 text-left font-medium"
              >
                <span>{item.question}</span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Content */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 pt-0 text-sm text-muted-foreground">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
