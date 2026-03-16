"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";

interface BannerCardProps {
  title: string;
  description?: string;
  image: string;
  modalId?: string;
  link?: string;
  onClick?: () => void;
  disableHover?: boolean;
}

const BannerCard: React.FC<BannerCardProps> = ({
  title,
  description,
  image,
  modalId,
  link,
  onClick,
  disableHover,
}) => {
  return (
    <div
      className="relative rounded-[30px] overflow-hidden shadow-lg transition-transform duration-300 cursor-pointer group
                 h-[400px] sm:h-[450px] md:h-[400px] lg:h-[550px]"
    >
      {/* Card image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-center transition-transform duration-300 group-hover:scale-105"
      />

      {/* Persistent dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Optional hover darkening */}
      {!disableHover && (
        <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20 z-15" />
      )}

      {/* Card content */}
      <div className="absolute inset-0 z-20 p-6 sm:p-8 md:p-10 flex flex-col justify-between text-white">
        {/* Top: title + description */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="mt-2 text-sm sm:text-base md:text-lg text-white/80 leading-snug">
              {description}
            </p>
          )}
        </div>

        {/* Bottom: button (always visible) */}
        <div>
          {modalId ? (
            <button
              onClick={onClick}
              className="mb-2 sm:mb-4 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg bg-white/30 hover:bg-white/50 rounded-full text-white font-medium transition-colors duration-200 flex items-center gap-2 z-30 relative"
            >
              Learn more <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          ) : (
            <a
              href={link}
              className="mb-2 sm:mb-4 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg bg-white/30 hover:bg-white/50 rounded-full text-white/90 font-medium transition-colors duration-200 z-30 relative"
            >
              Learn more <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          )}
        </div>
      </div>

      {/* Clickable overlay for accessibility */}
      {modalId ? (
        <button
          className="absolute inset-0 z-0 cursor-pointer"
          onClick={onClick}
          aria-label={`Open modal: ${title}`}
        />
      ) : (
        <a
          href={link}
          className="absolute inset-0 z-0 cursor-pointer"
          aria-label={title}
        />
      )}
    </div>
  );
};

export default BannerCard;
