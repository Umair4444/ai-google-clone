"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

const faqData: FAQItem[] = [
  {
    question: "How is Bhobbi Workplace different from a typical agency?",
    answer: (
      <p>
        Unlike traditional agencies that rely heavily on manual work, we build
        AI-driven systems that continuously optimise and automate your
        operations—delivering faster, more scalable results.
      </p>
    ),
  },
  {
    question:
      "Is Bhobbi Workplace suitable for SMEs or only large enterprises?",
    answer: (
      <p>
        Our solutions are scalable and designed for both SMEs and large
        enterprises—any business looking to improve efficiency and drive growth
        can benefit.
      </p>
    ),
  },
  {
    question: "Do you offer customised solutions?",
    answer: (
      <p>
        Yes. Every business is different, so we tailor our systems and services
        to your specific goals, industry, and challenges. Use our agent-assist
        bot to find out more or contact us directly via email.
      </p>
    ),
  },
  {
    question: "Do you work with us on ROI or specific business objectives?",
    answer: (
      <p>
        Yes, we align our solutions to your business goals and, where relevant,
        work towards measurable outcomes like ROI. This is typically structured
        on a case-by-case basis depending on the scope, services, and project
        requirements.
      </p>
    ),
  },
  {
    question: "Do you guarantee results or ROI?",
    answer: (
      <p>
        We focus on delivering measurable impact aligned to your objectives,
        including ROI where applicable. Specific performance commitments are
        evaluated on a case-by-case basis depending on the project scope.
      </p>
    ),
  },
  {
    question: "Do you offer Marketer-as-a-Service?",
    answer: (
      <>
        <p>
          Yes, we provide flexible Marketer-as-a-Service support tailored to
          your needs.
        </p>
        <p className="mt-2">You can choose between:</p>
        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-muted-foreground">
          <li>
            <strong>Marketing Generalist</strong> (under 5 years of experience)
            for execution and day-to-day support
          </li>
          <li>
            <strong>Marketing Expert</strong> (5+ years of experience) for
            strategic direction and leadership
          </li>
        </ul>
      </>
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
