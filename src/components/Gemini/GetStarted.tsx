// GetStarted.tsx
import React from "react";

interface PromoCardProps {
  title: string;
  imageSrc: string;
  link: string;
  linkText: string;
  isVideo?: boolean; // for future extension if you want <video>
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  imageSrc,
  link,
  linkText,
  isVideo = false,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[30px] shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={title}
      />

      <div className="relative h-[500px] w-[400px]">
        <img
          src={imageSrc}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* Scrim / dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="mb-4 text-xl font-semibold leading-tight md:text-2xl">
            {title}
          </h3>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition hover:bg-white/30"
          >
            <span>{linkText}</span>
            <svg
              className="h-5 w-5"
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
  );
};

const GetStarted = () => {
  const cards = [
    {
      title: "Ask anything, any way, in Google Search",
      imageSrc:
        "https://lh3.googleusercontent.com/EFrMyEOVYZNY54w6N8z1yDIlsy3ZhAdcwD5kL1XJzDWuHWiX2MqrOl3MfaU0-gM7R7xm70Dz7g0TWq9LH5z28srk0pGgnpaoy2J_70EkJW-7koagilA=w1440",
      link: "https://google.ai/",
      linkText: "Try AI Mode",
    },
    {
      title: "Chat with Gemini, your personal AI assistant",
      imageSrc:
        "https://lh3.googleusercontent.com/rGMC4neLuPUs5WpLdPluoiQzWXbs-Wdg12ITHLKsVBIZIfFaLKOvcLmBmkjL5WEXfjWu-7-3WCVTJ9pmNj8RXTEv0iFttJ2cTwsrrb03-ldbmbSfWA=w1440",
      link: "https://gemini.google.com/?utm_source=ai.google&utm_medium=referral",
      linkText: "Try Gemini",
    },
    {
      title: "Create and edit images with Nano Banana",
      imageSrc:
        "https://lh3.googleusercontent.com/r8r2n2_nuLGW3WJdwd9AalvGW0sxzuppKVq1v3S8GLHwWTZMLHzFZCaSAYEzgjXlfXr3AZ9okFaelmHSk1l_nri95DE2p_xWSB99ebscqq97DHzpJg=w1440",
      link: "https://gemini.google.com/?utm_source=ai.google&utm_medium=referral&target=image",
      linkText: "Try in Gemini",
    },
    {
      title: "Seamlessly create cinematic clips, scenes and stories",
      imageSrc:
        "https://lh3.googleusercontent.com/PeyM_HzMdIe0V7oG4e-fdkHODYu7xTwK7p52s8Rqa99-2z4frH2ExrurgzhPAWGtySqs_T_WUKeubHzaMss_wxkE_uK7h6lCQKCy30KIEpZV2w5qnw=w1440", // fallback poster used
      link: "https://labs.google/flow?utm_source=ai.google&utm_medium=referral",
      linkText: "Create with Flow",
      // Note: original had video → you can replace img with <video autoPlay loop muted playsInline />
    },
    {
      title: "Understand anything with your research and thinking partner",
      imageSrc:
        "https://lh3.googleusercontent.com/bZheMXm2Omqt3i2t469gvHyOoMWq2Y1WblGnOorJ8Zl-0YR1iYdYppNzFOmcXI5R-iLX0PkCxfjpyrsRUKLqiyLQlMQ04LrCKiXYgCbUNm-6-PLu=w1440",
      link: "https://notebooklm.google.com/?utm_source=ai.google&utm_medium=referral",
      linkText: "Try NotebookLM",
    },
    {
      title: "Turn your photos into videos using Veo 3",
      imageSrc:
        "https://lh3.googleusercontent.com/PeyM_HzMdIe0V7oG4e-fdkHODYu7xTwK7p52s8Rqa99-2z4frH2ExrurgzhPAWGtySqs_T_WUKeubHzaMss_wxkE_uK7h6lCQKCy30KIEpZV2w5qnw=w1440",
      link: "https://gemini.google.com/veo?utm_source=ai.google&utm_medium=referral",
      linkText: "Try in Gemini",
    },
  ];

  return (
    <div className="mx-auto px-4 py-20 sm:px-6 lg:px-20">
      <h2 className="mb-36 text-center text-4xl font-medium text-gray-900 dark:text-white md:text-7xl">
        Get started with Google AI
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
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
