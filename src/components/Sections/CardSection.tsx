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
    <section id={id} className={`py-4 lg:py-8 ${className} bg-gray-50`}>
      <div className="px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-2 text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {buttonText && (
            <button className="mt-4 sm:mt-0 px-6 py-3 rounded-full bg-gray-200/30 backdrop-blur-xl border border-white/20 text-gray-900 font-medium shadow-sm hover:bg-gray-200/50 transition-all duration-300">
              {buttonText}
            </button>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Media */}
              <div className="w-full h-[24rem] md:h-[28rem] lg:h-[32rem] relative overflow-hidden">
                {card.videoSrc ? (
                  <VideoCard
                    src={card.videoSrc}
                    poster={card.poster}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900">
                  {card.title}
                </h4>
                <p className="mt-3 text-gray-600 text-sm md:text-base flex-1">
                  {card.description}
                </p>

                {/* Link */}
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
                >
                  Learn more
                  <ArrowUpRight size={16} className="text-blue-600" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
