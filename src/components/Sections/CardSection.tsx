"use client";

import VideoCard from "@/components/Shared/VideoCard";
import { ArrowUpRight } from "lucide-react";

export type CardItem = {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  poster?: string;
  imageSrc?: string;
};

type ReusableCardSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  buttonText?: string;
  cards: CardItem[];
  className?: string;
};

export default function CardSection({
  id,
  title,
  subtitle,
  buttonText,
  cards,
  className = "",
}: ReusableCardSectionProps) {
  return (
    <section id={id} className={`py-4 lg:py-8 ${className}`}>
      <div className="px-4 md:px-8 lg:px-16 ">
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
              {title}
            </h3>

            {subtitle && (
              <h4 className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500 max-w-xl">
                {subtitle}
              </h4>
            )}
          </div>

          {/* Glass Button */}
          <button className="text-base sm:text-lg lg:text-xl shrink-0 px-5 py-2.5 rounded-full bg-gray-300/10 backdrop-blur-xl border border-white/20 text-gray-900 shadow-md hover:bg-gray-300/20 transition-all duration-300">
            {buttonText || "Learn more"}
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 lg:gap-8">
          {cards.map((card, idx) => (
            <div key={idx}>
              {/* Media Wrapper (same size for both) */}
              <div className="relative w-full aspect-video h-3/4 rounded-2xl overflow-hidden">
                {card.videoSrc ? (
                  <VideoCard
                    src={card.videoSrc}
                    poster={card.poster}
                    className="absolute  inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm lg:text-base text-gray-600 max-w-xl">
                  {card.description}
                </p>
              </div>

              {/* Link */}
              <div className="mt-2">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center gap-2 text-blue-600 hover:underline"
                >
                  Learn more{" "}
                  <span>
                    <ArrowUpRight size={14} className="text-blue-600" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
