"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    avatar: "SJ",
    content:
      "This AI platform has transformed how we handle customer support. The response accuracy is incredible, and our team can focus on complex issues while AI handles the routine queries.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    avatar: "MC",
    content:
      "Integration was seamless and the results exceeded our expectations. We've seen a 40% reduction in response time and customer satisfaction has never been higher.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder at DataFlow",
    avatar: "ER",
    content:
      "The natural language understanding is phenomenal. Our users often can't tell they're interacting with AI. It's like having a 24/7 expert available to everyone.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO at CloudScale",
    avatar: "DK",
    content:
      "Scalability was our main concern, but this solution handled our growth effortlessly. From 1K to 100K daily interactions without a single hiccup.",
    rating: 5,
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "Director of Operations at GlobalTech",
    avatar: "AF",
    content:
      "The ROI was evident within the first month. We reduced operational costs by 35% while improving service quality. Best investment we've made this year.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Wilson",
    role: "VP of Engineering at NextGen",
    avatar: "JW",
    content:
      "Developer experience is top-notch. The API is intuitive, documentation is comprehensive, and support team is always responsive. A pleasure to work with.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`size-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) {
  return (
    <Card className="relative flex h-full flex-col bg-background shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-4">
          <Quote className="size-8 text-primary/20" />
        </div>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {testimonial.content}
        </p>

        <div className="mt-auto">
          <div className="mb-3">
            <StarRating rating={testimonial.rating} />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
              {testimonial.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {testimonial.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section className="w-full mx-auto py-8 sm:py-10 lg:py-12 bg-muted/30">
      <div className="px-4 sm:px-6 lg:px-16 xl:px-20 mx-auto">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            See what companies around the world are saying about their
            experience with our us.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
