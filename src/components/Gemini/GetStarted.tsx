"use client";
import React, { useRef, useState } from "react";

interface PromoCardProps {
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  link?: string;
  linkText: string;
  isVideo?: boolean; // for future extension if you want <video>
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  imageSrc,
  videoSrc,
  link,
  linkText,
  isVideo = false,
}) => {
  const hasVideo = videoSrc && (isVideo || !imageSrc);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-[40px] shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      {/* Full-card link for accessibility */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10 pointer-events-auto"
      />

      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[24rem] xl:h-[30rem] flex flex-col justify-between">
        {/* Background image or video */}
        {hasVideo && videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            className="absolute inset-0 w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading="lazy"
            />
          )
        )}

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/60" />

        {/* Content */}
        <div className="w-full relative z-20 flex flex-col h-full p-6 sm:p-8 text-white">
          {/* Top Row */}
          <div className="flex items-start justify-between gap-4">
            {/* Title */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
              {title}
            </h3>

            {/* Play/Pause button (top-right) */}
            {hasVideo && (
              <button
                onClick={togglePlayPause}
                className="z-30 flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110 shrink-0"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 text-white ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            )}
          </div>

          {/* Bottom Section */}
          <div className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="z-30 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 sm:px-5 sm:py-3 text-sm md:text-base font-medium backdrop-blur-sm transition hover:bg-white/30"
            >
              <span>{linkText}</span>
              <svg
                className="h-4 w-4 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const GetStarted = () => {
  const cards = [
    {
      title: "Automation and Everything AI",
      videoSrc: "/everything-we-do/ai-and-everything-ai‑ revised.mp4",
      linkText: "Learn More",
      link: "/",
    },
    {
      title: "The next big thing?",
      videoSrc: "/everything-we-do/next-big-thing-revised.mp4",
      linkText: "Coming Soon in Q3 2026>",
      link: "/",
    },
    {
      title: "Business-ready workflows",
      imageSrc: "/everything-we-do/A-New-Breathtaking-Experience.png",
      linkText: "Learn More",
      link: "/",
    },
    {
      title: "Specialised Services & All-in-One Expert",
      imageSrc: "/everything-we-do/Specialised-Services-Expert.png",
      linkText: "Learn More",
      link: "/",
    },
    {
      title: "A new form of entertainment...",
      videoSrc: "/everything-we-do/new-form-of-entertainment-revised.mp4",
      linkText: "Coming Soon in Q3 2026>",
      link: "/",
    },
    {
      title: "Something industry-breaking...",
      videoSrc: "/everything-we-do/something-industry-breaking‑revised.mp4",
      linkText: "Coming Soon in Q3 2026>",
      link: "/",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between py-6 sm:py-10 xl:py-20">
      <h2 className="mb-6 sm:mb-10 lg:mb-28 xl:mb-32 text-center text-5xl sm:text-6xl lg:text-7xl font-medium text-gray-900 dark:text-white ">
        Everything We Do{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 px-4 container">
        {cards.map((card, index) => {
          // Add staggered offset for middle cards on lg
          const offsetClass = index % 3 === 1 ? "lg:-translate-y-16" : ""; // middle card of each row

          return (
            <div
              key={index}
              className={`transition-transform duration-300 ${offsetClass}`}
            >
              <PromoCard {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetStarted;
