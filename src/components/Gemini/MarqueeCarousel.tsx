"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Slider = {
  title: string;
  text: string;
  color: "yellow" | "red" | "green" | "blue";
  badge?: string;
  icon?: string;
  image?: string;
};

const sliderOne: Slider[] = [
  {
    title: "Create custom soundtracks",
    text: "Create a comical R&B slow jam about a sock finding their match.",
    color: "yellow",
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format&fit=crop",
  },
  {
    title: "Create an imaginative aerial landscape",
    text: "Aerial landscape in winter made from pink fur.",
    color: "red",
    icon: "🎥",
    image:
      "https://images.unsplash.com/photo-1603011238116-6c336f27bacc?w=600&auto=format&fit=crop",
  },
  {
    title: "Visualize photos as figurines",
    text: "Upload an image and create a commercial figurine version.",
    color: "yellow",
    icon: "🛡️",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
  },
  {
    title: "Design professional labels",
    text: "Create a stylish professional label for a product bottle.",
    color: "red",
    icon: "🖼️",
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&auto=format&fit=crop",
  },
  {
    title: "Envision a mural",
    text: "Upload a photo of your wall and preview a mural design.",
    color: "yellow",
    icon: "🎨",
    image:
      "https://images.unsplash.com/photo-1771167219256-5c4867b9616a?w=600&auto=format&fit=crop",
  },
];

const sliderTwo: Slider[] = [
  {
    title: "Mountain Sunset",
    text: "",
    color: "blue",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop",
  },
  {
    title: "City Night Lights",
    text: "",
    color: "green",
    image:
      "https://plus.unsplash.com/premium_photo-1661908853318-893732a14e42?w=600&auto=format&fit=crop",
  },
  {
    title: "Ocean Waves",
    text: "",
    color: "red",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop",
  },
  {
    title: "Forest Path",
    text: "",
    color: "yellow",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop",
  },
];

export default function MarqueeCarousel() {
  const containerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const scrollRef1 = useRef(0);
  const scrollRef2 = useRef(0);
  const [isPaused, setIsPaused] = useState(false); // manual pause/play
  const [isHovering, setIsHovering] = useState(false); // hover pause

  const items1 = [...sliderOne, ...sliderOne];
  const items2 = [...sliderTwo, ...sliderTwo];

  const colorClasses: Record<string, string> = {
    yellow: "from-yellow-400 to-amber-500",
    red: "from-red-500 to-rose-600",
    green: "from-emerald-500 to-teal-600",
    blue: "from-blue-500 to-indigo-600",
  };

  const speed = 0.7;

  // Animation loop
  useEffect(() => {
    const container1 = containerRef1.current;
    const container2 = containerRef2.current;
    if (!container1 || !container2) return;
    let frameId: number;

    const animate = () => {
      const shouldAnimate = !isPaused && !isHovering;
      if (shouldAnimate) {
        scrollRef1.current += speed;
        if (scrollRef1.current >= container1.scrollWidth / 2)
          scrollRef1.current = 0;
        container1.scrollLeft = scrollRef1.current;

        scrollRef2.current -= speed;
        if (scrollRef2.current <= 0)
          scrollRef2.current = container2.scrollWidth / 2;
        container2.scrollLeft = scrollRef2.current;
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [isPaused, isHovering]);

  const renderCard = (item: Slider, index: number) => (
    <div
      key={`${item.title}-${index}`}
      className={`flex-shrink-0 w-80 h-[180px] rounded-2xl overflow-hidden
      shadow-xl transition-transform duration-300 hover:scale-[1.04]
      bg-gradient-to-br ${colorClasses[item.color] || "from-gray-400 to-gray-500"} text-white relative`}
    >
      {item.badge && (
        <span className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-bold bg-black/70 rounded-full">
          {item.badge}
        </span>
      )}
      {item.icon && (
        <div className="absolute top-4 right-4 z-10 text-3xl opacity-80">
          {item.icon}
        </div>
      )}
      {item.image && (
        <div className="relative h-full w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>
      )}
    </div>
  );

  const scrollBySmooth = (direction: "left" | "right", duration = 300) => {
    const container1 = containerRef1.current;
    const container2 = containerRef2.current;
    if (!container1 || !container2) return;

    const amount = 320 + 24; // card width + gap
    const scrollAmount = direction === "left" ? -amount : amount;

    // Targets for smooth animation
    const target1 = scrollRef1.current + scrollAmount;
    const target2 = scrollRef2.current - scrollAmount; // reverse for bottom row

    const start1 = scrollRef1.current;
    const start2 = scrollRef2.current;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Linear interpolation
      scrollRef1.current = start1 + (target1 - start1) * progress;
      scrollRef2.current = start2 + (target2 - start2) * progress;

      // Infinite loop handling
      if (scrollRef1.current >= container1.scrollWidth / 2)
        scrollRef1.current -= container1.scrollWidth / 2;
      if (scrollRef1.current < 0)
        scrollRef1.current += container1.scrollWidth / 2;

      if (scrollRef2.current >= container2.scrollWidth / 2)
        scrollRef2.current -= container2.scrollWidth / 2;
      if (scrollRef2.current < 0)
        scrollRef2.current += container2.scrollWidth / 2;

      container1.scrollLeft = scrollRef1.current;
      container2.scrollLeft = scrollRef2.current;

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="max-w-[98vw] py-10 overflow-hidden relative space-y-6">
      {/* Top row */}
      <div
        ref={containerRef1}
        className="flex gap-6 overflow-hidden scrollbar-hide"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {items1.map(renderCard)}
      </div>

      {/* Bottom row */}
      <div
        ref={containerRef2}
        className="flex gap-6 overflow-hidden scrollbar-hide"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {items2.map(renderCard)}
      </div>

      {/* Arrows and pause */}
      <div className="flex justify-start items-center gap-4 mb-4 px-10">
        <button
          onClick={() => scrollBySmooth("left")}
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        >
          ◀
        </button>
        <button
          onClick={() => scrollBySmooth("right")}
          className="px-4 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
        >
          ▶
        </button>

        {/* Pause/Play button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`px-6 py-2 rounded-full font-medium text-white transition
    ${isPaused ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-700"}`}
        >
          {isPaused ? "▶ Play" : "❚❚ Pause"}
        </button>
      </div>
    </div>
  );
}
