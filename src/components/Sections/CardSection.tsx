"use client";

import VideoCard from "@/components/Shared/VideoCard";

export type CardItem = {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  poster?: string;
  imageSrc?: string;
};

type ReusableCardSectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  cards: CardItem[];
  className?: string;
};

export default function CardSection({
  id,
  title,
  subtitle,
  cards,
  className = "",
}: ReusableCardSectionProps) {
  return (
    <section
      id={id}
      className={`grid section-default spacer-block-md-top spacer-block-md-bottom ${className}`}
    >
      <div className="grid__inner grid__column--span-12">
        {/* Section Header */}
        <div className="grid__column--span-12">
          <div className="section-header section-header--medium section-header--stacked section-header--no-paragraphs section-header--paragraphs-left section-header--paragraphs-short">
            <div className="section-header__heading">
              <h3 className="section-header__title">{title}</h3>
              {subtitle && (
                <h4 className="section-header__subtitle">{subtitle}</h4>
              )}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="card-group card-group--generic-card-group grid spacer-block-xs-bottom">
          <div className="card-group__cards grid grid__column--span-12 gap-6 lg:gap-8">
            {cards.map((card, idx) => (
              <article
                key={idx}
                className="generic-card-group-container grid__column--span-12 md:grid__column--span-6 lg:grid__column--span-4"
              >
                {/* Video or Image */}
                {card.videoSrc ? (
                  <VideoCard src={card.videoSrc} poster={card.poster} />
                ) : (
                  <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Card Content */}
                <div className="card__content card__content--medium mt-4">
                  <h3 className="heading-9 card__title">{card.title}</h3>
                  <p className="card__text text-body mt-2">
                    {card.description}
                  </p>
                </div>

                {/* Link */}
                <div className="card__footer mt-2">
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Learn more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
