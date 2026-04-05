"use client";
import React, { useRef, useState } from "react";

interface PromoCardProps {
  title: string;
  imageSrc?: string;
  videoSrc?: string;
  link?: string;
  linkText: string;
  isVideo?: boolean;
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

    video.paused ? video.play() : video.pause();
  };

  return (
    <div className="group relative overflow-hidden rounded-[40px] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
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

        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/60 transition" />

        <div className="relative z-20 flex flex-col h-full p-6 sm:p-8 text-white">
          <div className="flex items-start justify-between">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
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
              className="inline-flex items-center gap-2 rounded-full text-sm md:text-base font-medium bg-transparent/10 px-4 py-2 sm:px-5 sm:py-3 backdrop-blur hover:bg-white/20 transition"
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

const TopLogoRow = () => {
  return (
    <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-3 sm:gap-2 md:gap-2 xl:gap-14 px-4 mb-8 mx-auto items-center">
      {/* LEFT LOGO */}
      <div className="sm:w-7/12 md:w-3/4 lg:w-full flex lg:justify-center transition-transform duration-300">
        <img
          src="/logo/workplace.png"
          alt="logo"
          className="h-8 md:h-16 lg:h-20 object-contain transition duration-300 scale-115 sm:scale-120 md:scale-100 hover:scale-110"
        />
      </div>

      {/* CENTER LOGO */}
      <div className="md:w-full flex justify-center transition-transform duration-300 lg:-translate-y-16">
        <img
          src="/logo/studio.png"
          alt="logo"
          className="h-8 md:h-12 lg:h-16 object-contain transition duration-300 hover:scale-110"
        />
      </div>

      {/* RIGHT LOGO */}
      <div className="sm:w-4/12 md:w-[35%] lg:w-full flex justify-end lg:justify-center transition-transform duration-300">
        <img
          src="/logo/lab.png"
          alt="logo"
          className="h-8 md:h-12 lg:h-16 object-contain transition duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

const MobileLogo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="lg:hidden w-full flex justify-center py-4">
    <img
      src={src}
      alt={alt}
      className="h-12 sm:h-14 object-contain transition duration-300 hover:scale-110"
    />
  </div>
);

const GetStarted = () => {
  const desktopcards = [
    {
      title: "Automation and Everything AI",
      videoSrc: "/everything-we-do/ai-and-everything.mp4",
      linkText: "Learn More",
      link: "/",
    },
    {
      title: "The next big thing?",
      videoSrc: "/everything-we-do/next-big-thing-revised.mp4",
      linkText: "Coming Soon in Q3 2026",
      link: "/",
    },
    {
      title: "Something industry-breaking...",
      videoSrc: "/everything-we-do/something-industry-breaking-revised.mp4",
      linkText: "Coming Soon in Q3 2026",
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
      linkText: "Coming Soon in Q3 2026",
      link: "/",
    },

    {
      title: "A New Breathtaking Experience..",
      imageSrc: "/everything-we-do/A-New-Breathtaking-Experience.png",
      linkText: "Coming Soon in Q1 2027",
      link: "/",
    },
  ];

  const mobilecards = [
    {
      title: "Specialised Services & All-in-One Expert",
      imageSrc: "/everything-we-do/Specialised-Services-Expert.png",
      linkText: "Learn More",
      link: "/",
    },
    {
      title: "Automation and Everything AI",
      videoSrc: "/everything-we-do/ai-and-everything.mp4",
      linkText: "Learn More",
      link: "/",
    },
    {
      title: "The next big thing?",
      videoSrc: "/everything-we-do/next-big-thing-revised.mp4",
      linkText: "Coming Soon in Q3 2026",
      link: "/",
    },
    {
      title: "A new form of entertainment...",
      videoSrc: "/everything-we-do/new-form-of-entertainment-revised.mp4",
      linkText: "Coming Soon in Q3 2026",
      link: "/",
    },
    {
      title: "Something industry-breaking...",
      videoSrc: "/everything-we-do/something-industry-breaking-revised.mp4",
      linkText: "Coming Soon in Q3 2026",
      link: "/",
    },

    {
      title: "A New Breathtaking Experience..",
      imageSrc: "/everything-we-do/A-New-Breathtaking-Experience.png",
      linkText: "Coming Soon in Q1 2027",
      link: "/",
    },
  ];

  const mobileLogos = [
    { src: "/logo/workplace.png", alt: "logo" },
    { src: "/logo/studio.png", alt: "logo" },
    { src: "/logo/lab.png", alt: "logo" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
      <h2 className="mb-10 lg:mb-28 text-center text-5xl sm:text-6xl lg:text-7xl font-medium">
        Everything We Do
      </h2>

      {/* Logo row - hidden on mobile, visible on lg+ */}
      <div className="hidden lg:block">
        <TopLogoRow />
      </div>

      {/* Mobile view (sm): logo then 2 cards, repeating - 1 card per row */}
      <div className="lg:hidden md:hidden w-full px-4">
        {mobilecards.map((card, index) => {
          const logoIndex = Math.floor(index / 2);
          const showMobileLogo =
            index % 2 === 0 && logoIndex < mobileLogos.length;

          return (
            <React.Fragment key={index}>
              {showMobileLogo && <MobileLogo {...mobileLogos[logoIndex]} />}
              <div className="mb-6">
                <PromoCard {...card} />
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Tablet view (md): logo then 2 cards per row */}
      <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6 px-4">
        {mobilecards.map((card, index) => {
          const logoIndex = Math.floor(index / 2);
          const showLogo = index % 2 === 0 && logoIndex < mobileLogos.length;

          return (
            <React.Fragment key={index}>
              {showLogo && (
                <div className="col-span-2 flex justify-center py-4">
                  <img
                    src={mobileLogos[logoIndex].src}
                    alt={mobileLogos[logoIndex].alt}
                    className="h-14 object-contain transition duration-300 hover:scale-110"
                  />
                </div>
              )}
              <PromoCard {...card} />
            </React.Fragment>
          );
        })}
      </div>

      {/* Desktop view (lg+): 3 cards per row */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-12 px-4">
        {desktopcards.map((card, index) => {
          const offsetClass = index % 3 === 1 ? "lg:-translate-y-16" : "";

          return (
            <div key={index} className={offsetClass}>
              <PromoCard {...card} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetStarted;
