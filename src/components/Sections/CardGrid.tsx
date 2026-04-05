"use client";

import React, { useState, useRef, useCallback, ReactNode } from "react";
import { Card, CardData } from "@/components/Shared/Card";

// -------------------- TYPES --------------------
export interface CardGridProps {
  cards: CardData[];
  title?: string;
  description?: ReactNode;
}

// -------------------- CARD GRID COMPONENT --------------------
export const CardGrid: React.FC<CardGridProps> = ({
  cards,
  title,
  description,
}) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [youTubeStarted, setYouTubeStarted] = useState<number | null>(null);
  const videoRefs = useRef(new Map<number, HTMLVideoElement>());
  const youTubeRefs = useRef(new Map<number, HTMLIFrameElement>());

  const setVideoRef = useCallback((id: number, el: HTMLVideoElement | null) => {
    if (el) videoRefs.current.set(id, el);
  }, []);

  const setYouTubeRef = useCallback(
    (id: number, el: HTMLIFrameElement | null) => {
      if (el) {
        youTubeRefs.current.set(id, el);
        // Try to play the video using postMessage API
        setTimeout(() => {
          el.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "playVideo", args: [] }),
            "*",
          );
        }, 500);
      }
    },
    [],
  );

  const handleVideoClick = useCallback(
    (id: number, type: "youtube" | "local-video") => {
      if (type === "youtube") {
        // Stop any playing local video
        videoRefs.current.forEach((v) => v.pause());
        setPlayingVideo(null);
        setYouTubeStarted(id);
      } else {
        // Clear YouTube state when playing local video
        setYouTubeStarted(null);
        const video = videoRefs.current.get(id);
        if (playingVideo === id) {
          video?.pause();
          setPlayingVideo(null);
        } else {
          videoRefs.current.forEach((v, key) => {
            if (key !== id) v.pause();
          });
          video?.play();
          setPlayingVideo(id);
        }
      }
    },
    [playingVideo],
  );

  return (
    <div className="w-full py-2 sm:py-4 lg:py-6 overflow-hidden mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
      {title && (
        <h2 className="text-3xl lg:text-4xl font-bold px-6 mb-3">{title}</h2>
      )}
      {description && (
        <p className=" text-base lg:text-lg text-muted-foreground px-6 mb-8">
          {description}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            playingVideo={playingVideo}
            youTubeStarted={youTubeStarted}
            setVideoRef={setVideoRef}
            setYouTubeRef={setYouTubeRef}
            handleVideoClick={handleVideoClick}
          />
        ))}
      </div>
    </div>
  );
};
