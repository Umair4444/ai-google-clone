// "use client";

// import React, { useCallback, useEffect, useState, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight, Play, Pause, Circle } from "lucide-react";

// interface CardData {
//   id: number;
//   title: string;
//   mediaType: "image" | "youtube" | "local-video";
//   mediaSrc: string;
//   poster?: string;
//   link: string;
//   linkText: string;
// }

// const cards: CardData[] = [
//   {
//     id: 1,
//     title: "Get real-time help with Search Live in the Google app",
//     mediaType: "local-video",
//     mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
//     poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
//     link: "#",
//     linkText: "Download from Google Play",
//   },
//   {
//     id: 2,
//     title:
//       "Have more natural and intuitive interactions in Gemini Live with 3.1 Flash Live",
//     mediaType: "youtube",
//     mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
//     poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
//     link: "#",
//     linkText: "Try in Gemini",
//   },
//   {
//     id: 3,
//     title: "Ask Maps anything about anywhere and turn ideas into adventures",
//     mediaType: "image",
//     mediaSrc:
//       "https://lh3.googleusercontent.com/qOGRL1iErYg6PCYkYuE25PaJrapNG6fG1jhLAdhhIB5a6fvQ3a7NHTBGwsTzxSF9XboSQZgA3_l-jbEZrzOrsWRfvmCrNO-waY5tjtOIBBNAEDgxEw=w1440-h1080-n-nu",
//     link: "#",
//     linkText: "Try in Google Maps",
//   },
//   {
//     id: 4,
//     title: "Discover new places with Google Earth",
//     mediaType: "local-video",
//     mediaSrc: "/videos/sample-video.mp4",
//     poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
//     link: "#",
//     linkText: "Explore in Google Earth",
//   },
// ];

// const EmblaCarousel: React.FC = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     align: "start",
//     containScroll: "trimSnaps",
//     dragFree: true,
//     slidesToScroll: 1,
//     skipSnaps: false,
//   });

//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//   const [youTubeStarted, setYouTubeStarted] = useState<number | null>(null);

//   const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
//   const youtubeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());

//   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
//   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setPrevBtnDisabled(!emblaApi.canScrollPrev());
//     setNextBtnDisabled(!emblaApi.canScrollNext());
//     setCurrentIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     emblaApi.on("select", onSelect);
//     emblaApi.on("reInit", onSelect);
//     onSelect();
//   }, [emblaApi, onSelect]);

//   const setVideoRef = useCallback((id: number, el: HTMLVideoElement | null) => {
//     if (el) {
//       videoRefs.current.set(id, el);
//       el.addEventListener("error", () => {
//         console.error(`Video ${id} failed to load`);
//       });
//     } else {
//       videoRefs.current.delete(id);
//     }
//   }, []);

//   const setYouTubeRef = useCallback(
//     (id: number, el: HTMLIFrameElement | null) => {
//       if (el) {
//         youtubeRefs.current.set(id, el);
//       } else {
//         youtubeRefs.current.delete(id);
//       }
//     },
//     [],
//   );

//   const handleVideoClick = useCallback(
//     async (id: number, mediaType: "youtube" | "local-video") => {
//       if (mediaType === "youtube") {
//         if (youTubeStarted === id) {
//           const iframe = youtubeRefs.current.get(id);
//           if (iframe) {
//             iframe.contentWindow?.postMessage(
//               '{"event":"command","func":"pauseVideo","args":""}',
//               "*",
//             );
//           }
//           setYouTubeStarted(null);
//         } else {
//           if (youTubeStarted !== null) {
//             const prevIframe = youtubeRefs.current.get(youTubeStarted);
//             prevIframe?.contentWindow?.postMessage(
//               '{"event":"command","func":"pauseVideo","args":""}',
//               "*",
//             );
//           }
//           setYouTubeStarted(id);
//           // Wait for iframe to load and initialize YouTube API
//           setTimeout(() => {
//             const iframe = youtubeRefs.current.get(id);
//             if (iframe) {
//               iframe.contentWindow?.postMessage(
//                 '{"event":"command","func":"playVideo","args":""}',
//                 "*",
//               );
//             }
//           }, 500);
//         }
//         setPlayingVideo(youTubeStarted === id ? null : id);
//       } else {
//         if (playingVideo === id) {
//           videoRefs.current.get(id)?.pause();
//           setPlayingVideo(null);
//         } else {
//           videoRefs.current.get(playingVideo ?? -1)?.pause();
//           const video = videoRefs.current.get(id);
//           if (video) {
//             await video.play();
//             setPlayingVideo(id);
//           }
//         }
//         setYouTubeStarted(null);
//       }
//     },
//     [playingVideo, youTubeStarted],
//   );

//   return (
//     <div className="relative py-12 overflow-x-hidden select-none">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Title */}
//         <h2 className="text-4xl px-6 font-bold mb-6 text-zinc-900 dark:text-white">
//           AI-Powered
//         </h2>

//         {/* Embla Viewport */}
//         <div
//           className="overflow-hidden cursor-grab py-8 active:cursor-grabbing select-none"
//           ref={emblaRef}
//           style={{ touchAction: "pan-x", userSelect: "none" }}
//         >
//           {/* Track */}
//           <div
//             className="flex select-none"
//             style={{ touchAction: "pan-x", userSelect: "none" }}
//           >
//             {cards.map((card) => (
//               <div
//                 key={card.id}
//                 className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
//                 style={{ touchAction: "pan-x" }}
//               >
//                 <div className="px-3 h-full">
//                   <div
//                     className="h-full flex flex-col rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:shadow-2xl hover:scale-[1.02]"
//                     style={{ touchAction: "pan-x" }}
//                   >
//                     {/* Media */}
//                     <div className="relative aspect-[4/3] overflow-hidden">
//                       {card.mediaType === "youtube" ? (
//                         <>
//                           {youTubeStarted === card.id ? (
//                             <iframe
//                               ref={(el) => setYouTubeRef(card.id, el)}
//                               src={`${card.mediaSrc}?enablejsapi=1&rel=0&modestbranding=1&controls=1`}
//                               className="w-full h-full pointer-events-auto"
//                               allowFullScreen
//                               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             />
//                           ) : (
//                             <>
//                               <img
//                                 src={card.poster}
//                                 alt={card.title}
//                                 className="w-full h-full object-cover pointer-events-none select-none"
//                                 draggable={false}
//                               />
//                               <button
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   handleVideoClick(card.id, "youtube");
//                                 }}
//                                 onPointerDown={(e) => e.stopPropagation()}
//                                 className="absolute bottom-4 right-4 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors z-10 rounded-full p-4 backdrop-blur-sm shadow-lg pointer-events-auto"
//                                 type="button"
//                                 aria-label="Play video"
//                               >
//                                 <Play className="w-4 h-4 text-white ml-1 fill-white" />
//                               </button>
//                             </>
//                           )}
//                         </>
//                       ) : card.mediaType === "image" ? (
//                         <img
//                           src={card.mediaSrc}
//                           draggable={false}
//                           className="w-full h-full object-cover pointer-events-none select-none transition-transform hover:scale-110"
//                         />
//                       ) : (
//                         <>
//                           <video
//                             ref={(el) => setVideoRef(card.id, el)}
//                             src={card.mediaSrc}
//                             poster={card.poster}
//                             draggable={false}
//                             className="w-full h-full object-cover pointer-events-none select-none"
//                             loop
//                             muted
//                             playsInline
//                             preload="metadata"
//                           />

//                           <button
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               handleVideoClick(card.id, "local-video");
//                             }}
//                             onPointerDown={(e) => e.stopPropagation()}
//                             className="absolute bottom-4 right-4 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors z-10 rounded-full p-4 backdrop-blur-sm shadow-lg pointer-events-auto"
//                             type="button"
//                             aria-label={
//                               playingVideo === card.id
//                                 ? "Pause video"
//                                 : "Play video"
//                             }
//                           >
//                             {playingVideo === card.id ? (
//                               <Pause className="w-4 h-4 text-white" />
//                             ) : (
//                               <Play className="w-4 h-4 text-white ml-1 fill-white" />
//                             )}
//                           </button>
//                         </>
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div className=" p-6 flex flex-col gap-8 flex-1">
//                       <h3 className="font-semibold line-clamp-3">
//                         {card.title}
//                       </h3>

//                       <a
//                         href={card.link}
//                         onClick={(e) => e.stopPropagation()}
//                         className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
//                       >
//                         {card.linkText}
//                         <ChevronRight className="w-4 h-4" />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="mt-4 px-8 flex items-center justify-between">
//           {/* Arrows */}
//           <div className="flex gap-3 bg-gray-100 rounded-full p-1">
//             <button
//               onClick={scrollPrev}
//               disabled={prevBtnDisabled}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 shadow disabled:opacity-30"
//             >
//               <ChevronLeft />
//             </button>

//             <button
//               onClick={scrollNext}
//               disabled={nextBtnDisabled}
//               className="p-2 rounded-full bg-gray-100 hover:bg-gray-300 shadow disabled:opacity-30"
//             >
//               <ChevronRight />
//             </button>
//           </div>

//           {/* Dots */}
//           <div className="flex gap-2">
//             {cards.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => emblaApi?.scrollTo(i)}
//                 className={`h-2 rounded-full transition-all ${
//                   currentIndex === i ? "bg-blue-600 w-6" : "bg-zinc-300 w-2"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;

"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

export interface CardData {
  id: number;
  title: string;
  mediaType: "image" | "youtube" | "local-video";
  mediaSrc: string;
  poster?: string;
  onClick?: () => void;
  linkText: string;
}

interface ReusableCarouselProps {
  cards: CardData[];
  title?: string;
}

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({
  cards,
  title = "AI-Powered",
}) => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    slidesToScroll: 1,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [youTubeStarted, setYouTubeStarted] = useState<number | null>(null);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const youtubeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const setVideoRef = useCallback((id: number, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.current.set(id, el);
    } else {
      videoRefs.current.delete(id);
    }
  }, []);

  const setYouTubeRef = useCallback(
    (id: number, el: HTMLIFrameElement | null) => {
      if (el) {
        youtubeRefs.current.set(id, el);
      } else {
        youtubeRefs.current.delete(id);
      }
    },
    [],
  );

  const handleVideoClick = useCallback(
    async (id: number, mediaType: "youtube" | "local-video") => {
      if (mediaType === "youtube") {
        if (youTubeStarted === id) {
          const iframe = youtubeRefs.current.get(id);
          iframe?.contentWindow?.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*",
          );
          setYouTubeStarted(null);
        } else {
          if (youTubeStarted !== null) {
            const prevIframe = youtubeRefs.current.get(youTubeStarted);
            prevIframe?.contentWindow?.postMessage(
              '{"event":"command","func":"pauseVideo","args":""}',
              "*",
            );
          }
          setYouTubeStarted(id);
          // Wait for iframe to fully load and YouTube API to initialize
          setTimeout(() => {
            const iframe = youtubeRefs.current.get(id);
            if (iframe && iframe.contentWindow) {
              // Send play command with proper origin
              iframe.contentWindow.postMessage(
                '{"event":"command","func":"playVideo","args":""}',
                "*",
              );
              console.log("Play command sent to YouTube video", id);
            } else {
              console.error("YouTube iframe not ready", id);
            }
          }, 1500);
        }
        setPlayingVideo(youTubeStarted === id ? null : id);
      } else {
        if (playingVideo === id) {
          videoRefs.current.get(id)?.pause();
          setPlayingVideo(null);
        } else {
          videoRefs.current.get(playingVideo ?? -1)?.pause();
          const video = videoRefs.current.get(id);
          if (video) {
            await video.play();
            setPlayingVideo(id);
          }
        }
        setYouTubeStarted(null);
      }
    },
    [playingVideo, youTubeStarted],
  );

  return (
    <div className="relative py-8 sm:py-10 lg:py-12 overflow-x-hidden select-none">
      <div className="mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Title */}
        <h2 className="text-4xl px-6 font-bold text-zinc-900 dark:text-white">
          {title}
        </h2>

        {/* Carousel Viewport */}
        <div
          className="overflow-hidden w-full cursor-grab py-8 active:cursor-grabbing select-none"
          ref={emblaRef}
          style={{ touchAction: "pan-y" }}
        >
          {/* Track */}
          <div className="flex select-none" style={{ touchAction: "pan-y" }}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                style={{ touchAction: "pan-y" }}
              >
                <div className="px-4 h-full">
                  <div
                    className="h-full flex flex-col p-1 rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-inherit hover:bg-gray-100 dark:bg-zinc-900 transition-all hover:shadow-xl hover:scale-[1.02]"
                    style={{ touchAction: "pan-y" }}
                  >
                    {/* Media */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                      {card.mediaType === "youtube" ? (
                        youTubeStarted === card.id ? (
                          <iframe
                            ref={(el) => setYouTubeRef(card.id, el)}
                            src={`${card.mediaSrc}?enablejsapi=1&origin=${typeof window !== "undefined" ? window.location.origin : ""}&mute=0&widgetid=video-${card.id}`}
                            className="w-full h-full pointer-events-auto"
                            allowFullScreen
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          />
                        ) : (
                          <>
                            <img
                              src={card.poster}
                              className="w-full h-full object-cover pointer-events-none select-none"
                            />
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleVideoClick(card.id, "youtube");
                              }}
                              onPointerDown={(e) => e.stopPropagation()}
                              className="absolute bottom-4 right-4 bg-white/20 rounded-full p-4 pointer-events-auto"
                            >
                              <Play className="w-4 h-4 text-white fill-white" />
                            </button>
                          </>
                        )
                      ) : card.mediaType === "image" ? (
                        <img
                          src={card.mediaSrc}
                          className="w-full h-full object-cover pointer-events-none select-none"
                        />
                      ) : (
                        <>
                          <video
                            ref={(el) => setVideoRef(card.id, el)}
                            src={card.mediaSrc}
                            poster={card.poster}
                            className="w-full h-full object-cover pointer-events-none select-none"
                            loop
                            muted
                            playsInline
                          />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoClick(card.id, "local-video");
                            }}
                            onPointerDown={(e) => e.stopPropagation()}
                            className="absolute bottom-4 right-4 bg-white/20 rounded-full p-4 pointer-events-auto"
                          >
                            {playingVideo === card.id ? (
                              <Pause className="w-4 h-4 text-white" />
                            ) : (
                              <Play className="w-4 h-4 text-white fill-white" />
                            )}
                          </button>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col gap-8 flex-1">
                      <h3 className="font-semibold text-base lg:text-lg line-clamp-3">
                        {card.title}
                      </h3>

                      <button
                        onClick={card.onClick}
                        className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                      >
                        {card.linkText}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 px-8 flex items-center justify-between">
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
    </div>
  );
};

export default ReusableCarousel;
