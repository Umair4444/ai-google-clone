"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardData } from "@/components/Solution/Card";

// -------------------- CAROUSEL --------------------
interface Props {
  cards: CardData[];
  title?: string;
}

const ReusableCarousel: React.FC<Props> = ({ cards, title = "AI-Powered" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [youTubeStarted, setYouTubeStarted] = useState<number | null>(null);

  const videoRefs = useRef(new Map<number, HTMLVideoElement>());
  const youtubeRefs = useRef(new Map<number, HTMLIFrameElement>());

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const setVideoRef = (id: number, el: HTMLVideoElement | null) => {
    if (el) videoRefs.current.set(id, el);
  };

  const setYouTubeRef = (id: number, el: HTMLIFrameElement | null) => {
    if (el) {
      youtubeRefs.current.set(id, el);
      // Try to play the video using postMessage API
      setTimeout(() => {
        el.contentWindow?.postMessage(
          JSON.stringify({ event: "command", func: "playVideo", args: [] }),
          "*",
        );
      }, 500);
    }
  };

  const handleVideoClick = async (
    id: number,
    type: "youtube" | "local-video",
  ) => {
    if (type === "youtube") {
      // Stop any playing local video
      videoRefs.current.forEach((v) => v.pause());
      setPlayingVideo(null);
      setYouTubeStarted(id);
    } else {
      // Clear YouTube state when playing local video
      setYouTubeStarted(null);
      if (playingVideo === id) {
        videoRefs.current.get(id)?.pause();
        setPlayingVideo(null);
      } else {
        videoRefs.current.forEach((v, key) => {
          if (key !== id) v.pause();
        });
        videoRefs.current.get(id)?.play();
        setPlayingVideo(id);
      }
    }
  };

  return (
    <div className="relative py-2 sm:py-4 lg:py-6 overflow-hidden mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
      <h2 className="text-4xl font-bold px-6">{title}</h2>

      <div
        className="overflow-hidden py-8 cursor-grab active:cursor-grabbing"
        ref={emblaRef}
      >
        <div className="flex">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <Card
                card={card}
                playingVideo={playingVideo}
                youTubeStarted={youTubeStarted}
                setVideoRef={setVideoRef}
                setYouTubeRef={setYouTubeRef}
                handleVideoClick={handleVideoClick}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="px-8 flex items-center justify-between">
        <div className="flex gap-3 bg-gray-100 rounded-full p-1">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 shadow disabled:opacity-30"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 shadow disabled:opacity-30"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="flex gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-2 rounded-full ${
                currentIndex === i ? "bg-blue-600 w-6" : "bg-zinc-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableCarousel;
