"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useRef, useState } from "react";

type VideoSectionProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  overlay?: boolean;
  className?: string;
};

export default function VideoCard({
  src,
  poster,
  autoPlay = true,
  loop = true,
  muted = true,
  overlay = true,
  className = "",
}: VideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`w-full py-4 lg:py-8 ${className}`}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        {/* Video */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        {overlay && <div className="absolute inset-0 bg-black/30"></div>}

        {/* Play/Pause Button */}
        <button
          onClick={handlePlayPause}
          className="absolute inset-0 flex items-end justify-end p-4"
          aria-label="Toggle video"
        >
          <div className="bg-transparent hover:bg-white/10 backdrop-blur-2xl p-4 rounded-full shadow-md transition">
            {isPlaying ? (
              <PauseIcon className="text-white" size={16} fill="white" />
            ) : (
              <PlayIcon className="text-white" size={16} fill="white" />
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
