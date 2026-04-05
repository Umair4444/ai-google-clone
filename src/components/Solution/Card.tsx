import React from "react";
import { ChevronRight, Play, Pause } from "lucide-react";

// -------------------- TYPES --------------------
export interface CardData {
  id: number;
  title: string;
  mediaType: "image" | "youtube" | "local-video";
  mediaSrc: string;
  poster?: string;
  onClick?: () => void;
  linkText: string;
}

// -------------------- CARD COMPONENT --------------------
export interface CardProps {
  card: CardData;
  playingVideo: number | null;
  youTubeStarted: number | null;
  setVideoRef: (id: number, el: HTMLVideoElement | null) => void;
  setYouTubeRef: (id: number, el: HTMLIFrameElement | null) => void;
  handleVideoClick: (id: number, type: "youtube" | "local-video") => void;
}

export const Card: React.FC<CardProps> = ({
  card,
  playingVideo,
  youTubeStarted,
  setVideoRef,
  setYouTubeRef,
  handleVideoClick,
}) => {
  const [videoStarted, setVideoStarted] = React.useState(false);

  const handleLocalVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (card.poster && !videoStarted) {
      setVideoStarted(true);
    }
    handleVideoClick(card.id, "local-video");
  };

  return (
    <div className="px-4 h-full">
      <div className="h-full flex flex-col p-1 rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-inherit hover:bg-gray-100 dark:bg-zinc-900 transition-all hover:shadow-xl hover:scale-[1.02]">
        {/* Media */}
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
          {card.mediaType === "youtube" ? (
            youTubeStarted === card.id ? (
              <iframe
                ref={(el) => setYouTubeRef(card.id, el)}
                src={`${card.mediaSrc}?enablejsapi=1&autoplay=1&mute=0&origin=${typeof window !== "undefined" ? window.location.origin : ""}`}
                className="w-full h-full pointer-events-auto"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <img
                  src={card.poster}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleVideoClick(card.id, "youtube");
                  }}
                  className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 shadow-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out"
                >
                  <Play className="w-4 h-4 text-white fill-white" />
                </button>
              </>
            )
          ) : card.mediaType === "image" ? (
            <img
              src={card.mediaSrc}
              className="w-full h-full object-cover pointer-events-none"
            />
          ) : (
            <div className="relative w-full h-full">
              <video
                ref={(el) => setVideoRef(card.id, el)}
                src={card.mediaSrc}
                poster={card.poster}
                className="w-full h-full object-cover pointer-events-none"
                loop
                playsInline
                autoPlay={videoStarted}
                muted={videoStarted}
              />
              {card.poster && !videoStarted && (
                <img
                  src={card.poster}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
              )}
              <button
                onClick={handleLocalVideoClick}
                className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-4 shadow-lg hover:bg-white/20 hover:scale-105 active:scale-95 transition-all duration-300 ease-out z-10"
              >
                {playingVideo === card.id ? (
                  <Pause className="w-4 h-4 text-white" />
                ) : (
                  <Play className="w-4 h-4 text-white fill-white" />
                )}
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-8 flex-1">
          <h3 className="font-semibold text-base lg:text-lg line-clamp-3">
            {card.title}
          </h3>
          <button
            onClick={card.onClick}
            className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors cursor-pointer"
          >
            {card.linkText}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
