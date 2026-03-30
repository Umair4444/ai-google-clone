// "use client";

// import React, { useCallback, useEffect, useState, useRef } from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// interface CardData {
//   id: number;
//   title: string;
//   mediaType: "image" | "youtube" | "video" | "local-video";
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
//     mediaSrc: "/everything-we-do/ai-and-everything-ai-revised.mp4",
//     poster: "/thumbnails/video1-poster.jpg",
//     link: "/everything-we-do/ai-and-everything-ai-revised.mp4",
//     linkText: "Download from Google Play",
//   },
//   {
//     id: 2,
//     title:
//       "Have more natural and intuitive interactions in Gemini Live with 3.1 Flash Live",
//     mediaType: "youtube",
//     mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
//     link: "https://gemini.google.com/",
//     linkText: "Try in Gemini",
//   },
//   {
//     id: 3,
//     title: "Ask Maps anything about anywhere and turn ideas into adventures",
//     mediaType: "image",
//     mediaSrc:
//       "https://lh3.googleusercontent.com/qOGRL1iErYg6PCYkYuE25PaJrapNG6fG1jhLAdhhIB5a6fvQ3a7NHTBGwsTzxSF9XboSQZgA3_l-jbEZrzOrsWRfvmCrNO-waY5tjtOIBBNAEDgxEw=w1440-h1080-n-nu",
//     link: "https://blog.google/products-and-platforms/products/maps/ask-maps-immersive-navigation",
//     linkText: "Try in Google Maps",
//   },
//   {
//     id: 4,
//     title: "Discover new places with Google Earth",
//     mediaType: "local-video",
//     mediaSrc: "/videos/sample-video.mp4",
//     poster: "/thumbnails/video2-poster.jpg",
//     link: "https://earth.google.com/",
//     linkText: "Explore in Google Earth",
//   },
//   {
//     id: 5,
//     title: "Capture and share your world with Google Photos",
//     mediaType: "image",
//     mediaSrc: "https://lh3.googleusercontent.com/proxy/example-image-photos",
//     link: "https://photos.google.com/",
//     linkText: "Get Google Photos",
//   },
// ];

// const EmblaCarousel: React.FC = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: false,
//     align: "start",
//     slidesToScroll: 1,
//     containScroll: "trimSnaps",
//   });

//   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
//   const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [playingVideo, setPlayingVideo] = useState<number | null>(null);
//   const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

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

//   const handleVideoClick = useCallback(
//     (cardId: number, videoSrc: string) => {
//       if (playingVideo === cardId) {
//         videoRefs.current.get(cardId)?.pause();
//         setPlayingVideo(null);
//       } else {
//         videoRefs.current.get(playingVideo ?? -1)?.pause();
//         const video = videoRefs.current.get(cardId);
//         if (video) {
//           video.play();
//           setPlayingVideo(cardId);
//         }
//       }
//     },
//     [playingVideo],
//   );

//   const setVideoRef = useCallback(
//     (cardId: number, video: HTMLVideoElement | null) => {
//       if (video) {
//         videoRefs.current.set(cardId, video);
//       } else {
//         videoRefs.current.delete(cardId);
//       }
//     },
//     [],
//   );

//   return (
//     <div className="relative py-12 px-8">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex gap-6 max-w-7xl mx-auto">
//           {cards.map((card) => (
//             <div
//               key={card.id}
//               className="flex-[0_0_100%] py-8 min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-12px)]"
//             >
//               <div className="h-full rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] bg-white dark:bg-zinc-900">
//                 <div className="relative aspect-[4/3] overflow-hidden">
//                   {card.mediaType === "youtube" ? (
//                     <iframe
//                       src={card.mediaSrc + "?rel=0&modestbranding=1"}
//                       title={card.title}
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       className="w-full h-full"
//                     />
//                   ) : card.mediaType === "image" ? (
//                     <img
//                       src={card.mediaSrc}
//                       alt={card.title}
//                       className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <>
//                       <video
//                         ref={(el) => setVideoRef(card.id, el)}
//                         src={card.mediaSrc}
//                         poster={card.poster}
//                         className="w-full h-full object-cover"
//                         loop
//                         muted
//                         playsInline
//                       />
//                       <button
//                         onClick={() => handleVideoClick(card.id, card.mediaSrc)}
//                         className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
//                       >
//                         <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
//                           {playingVideo === card.id ? (
//                             <div className="w-6 h-6 bg-black rounded-sm" />
//                           ) : (
//                             <Play className="w-8 h-8 text-black ml-1" />
//                           )}
//                         </div>
//                       </button>
//                       {playingVideo === card.id && (
//                         <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm rounded-full p-2">
//                           <Play className="w-5 h-5 text-white fill-white" />
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </div>

//                 <div className="p-6 flex flex-col h-[calc(100%-300px)] min-h-[200px]">
//                   <h3 className="text-lg font-semibold leading-tight mb-auto line-clamp-3">
//                     {card.title}
//                   </h3>

//                   <a
//                     href={card.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
//                   >
//                     {card.linkText}
//                     <ChevronRight className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="absolute bottom-4 left-1/12 w-full px-6 flex items-center">
//         {/* Left: Navigation Buttons */}
//         <div className="flex items-center gap-3">
//           <button
//             onClick={scrollPrev}
//             disabled={prevBtnDisabled}
//             className="bg-white dark:bg-zinc-900 shadow-lg p-2.5 rounded-full
//       disabled:opacity-30 disabled:cursor-not-allowed
//       hover:bg-zinc-100 dark:hover:bg-zinc-800
//       transition-all hover:scale-110 active:scale-95"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>

//           <button
//             onClick={scrollNext}
//             disabled={nextBtnDisabled}
//             className="bg-white dark:bg-zinc-900 shadow-lg p-2.5 rounded-full
//       disabled:opacity-30 disabled:cursor-not-allowed
//       hover:bg-zinc-100 dark:hover:bg-zinc-800
//       transition-all hover:scale-110 active:scale-95"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Center: Indicators */}
//         <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => emblaApi?.scrollTo(index)}
//               className={`h-2 rounded-full transition-all duration-300 ${
//                 currentIndex === index
//                   ? "bg-blue-600 w-6"
//                   : "bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 w-2"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmblaCarousel;

"use client";

import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Play, Pause, Circle } from "lucide-react";

interface CardData {
  id: number;
  title: string;
  mediaType: "image" | "youtube" | "local-video";
  mediaSrc: string;
  poster?: string;
  link: string;
  linkText: string;
}

const cards: CardData[] = [
  {
    id: 1,
    title: "Get real-time help with Search Live in the Google app",
    mediaType: "local-video",
    mediaSrc: "/everything-we-do/ai-and-everything-ai‑revised.mp4",
    poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
    link: "#",
    linkText: "Download from Google Play",
  },
  {
    id: 2,
    title:
      "Have more natural and intuitive interactions in Gemini Live with 3.1 Flash Live",
    mediaType: "youtube",
    mediaSrc: "https://www.youtube.com/embed/8k8gzfaLDg4",
    poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
    link: "#",
    linkText: "Try in Gemini",
  },
  {
    id: 3,
    title: "Ask Maps anything about anywhere and turn ideas into adventures",
    mediaType: "image",
    mediaSrc:
      "https://lh3.googleusercontent.com/qOGRL1iErYg6PCYkYuE25PaJrapNG6fG1jhLAdhhIB5a6fvQ3a7NHTBGwsTzxSF9XboSQZgA3_l-jbEZrzOrsWRfvmCrNO-waY5tjtOIBBNAEDgxEw=w1440-h1080-n-nu",
    link: "#",
    linkText: "Try in Google Maps",
  },
  {
    id: 4,
    title: "Discover new places with Google Earth",
    mediaType: "local-video",
    mediaSrc: "/videos/sample-video.mp4",
    poster: "/everything-we-do/A-New-Breathtaking-Experience.png",
    link: "#",
    linkText: "Explore in Google Earth",
  },
];

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    slidesToScroll: 1,
    skipSnaps: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [youTubeStarted, setYouTubeStarted] = useState<number | null>(null);

  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const youtubeRefs = useRef<Map<number, HTMLIFrameElement>>(new Map());

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
    setCurrentIndex(emblaApi.selectedScrollSnap());
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
      el.addEventListener('error', () => {
        console.error(`Video ${id} failed to load`);
      });
    } else {
      videoRefs.current.delete(id);
    }
  }, []);

  const setYouTubeRef = useCallback((id: number, el: HTMLIFrameElement | null) => {
    if (el) {
      youtubeRefs.current.set(id, el);
    } else {
      youtubeRefs.current.delete(id);
    }
  }, []);

  const handleVideoClick = useCallback(
    async (id: number, mediaType: "youtube" | "local-video") => {
      if (mediaType === "youtube") {
        if (youTubeStarted === id) {
          const iframe = youtubeRefs.current.get(id);
          if (iframe) {
            iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
          setYouTubeStarted(null);
        } else {
          if (youTubeStarted !== null) {
            const prevIframe = youtubeRefs.current.get(youTubeStarted);
            prevIframe?.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
          }
          setYouTubeStarted(id);
          // Wait for iframe to load and initialize YouTube API
          setTimeout(() => {
            const iframe = youtubeRefs.current.get(id);
            if (iframe) {
              iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            }
          }, 500);
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
    <div className="relative py-12 overflow-x-hidden select-none">
      <div className="px-20 mx-auto">
        {/* Embla Viewport */}
        <div
          className="overflow-hidden cursor-grab py-8 active:cursor-grabbing select-none"
          ref={emblaRef}
          style={{ touchAction: 'pan-y', userSelect: 'none' }}
        >
          {/* Track */}
          <div className="flex select-none" style={{ touchAction: 'pan-y', userSelect: 'none' }}>
            {cards.map((card) => (
              <div
                key={card.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                style={{ touchAction: 'pan-y' }}
              >
                <div className="px-3 h-full">
                  <div className="h-full flex flex-col rounded-3xl overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-all hover:shadow-2xl hover:scale-[1.02]" style={{ touchAction: 'pan-y' }}>
                    {/* Media */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {card.mediaType === "youtube" ? (
                        <>
                          {youTubeStarted === card.id ? (
                            <iframe
                              ref={(el) => setYouTubeRef(card.id, el)}
                              src={`${card.mediaSrc}?enablejsapi=1&rel=0&modestbranding=1&controls=1`}
                              className="w-full h-full pointer-events-auto"
                              allowFullScreen
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            />
                          ) : (
                            <>
                              <img
                                src={card.poster}
                                alt={card.title}
                                className="w-full h-full object-cover pointer-events-none select-none"
                                draggable={false}
                              />
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleVideoClick(card.id, "youtube");
                                }}
                                onPointerDown={(e) => e.stopPropagation()}
                                className="absolute bottom-4 right-4 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors z-10 rounded-full p-4 backdrop-blur-sm shadow-lg pointer-events-auto"
                                type="button"
                                aria-label="Play video"
                              >
                                <Play className="w-4 h-4 text-white ml-1 fill-white" />
                              </button>
                            </>
                          )}
                        </>
                      ) : card.mediaType === "image" ? (
                        <img
                          src={card.mediaSrc}
                          draggable={false}
                          className="w-full h-full object-cover pointer-events-none select-none transition-transform hover:scale-110"
                        />
                      ) : (
                        <>
                          <video
                            ref={(el) => setVideoRef(card.id, el)}
                            src={card.mediaSrc}
                            poster={card.poster}
                            draggable={false}
                            className="w-full h-full object-cover pointer-events-none select-none"
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleVideoClick(card.id, "local-video");
                            }}
                            onPointerDown={(e) => e.stopPropagation()}
                            className="absolute bottom-4 right-4 flex items-center justify-center bg-white/20 hover:bg-white/30 transition-colors z-10 rounded-full p-4 backdrop-blur-sm shadow-lg pointer-events-auto"
                            type="button"
                            aria-label={playingVideo === card.id ? "Pause video" : "Play video"}
                          >
                            {playingVideo === card.id ? (
                              <Pause className="w-4 h-4 text-white" />
                            ) : (
                              <Play className="w-4 h-4 text-white ml-1 fill-white" />
                            )}
                          </button>
                        </>
                      )}
                    </div>

                    {/* Content */}
                    <div className=" p-6 flex flex-col gap-8 flex-1">
                      <h3 className="font-semibold line-clamp-3">
                        {card.title}
                      </h3>

                      <a
                        href={card.link}
                        onClick={(e) => e.stopPropagation()}
                        className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                      >
                        {card.linkText}
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-6 flex items-center justify-between">
          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className="p-2 rounded-full bg-white shadow disabled:opacity-30"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className="p-2 rounded-full bg-white shadow disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {cards.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
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

export default EmblaCarousel;
