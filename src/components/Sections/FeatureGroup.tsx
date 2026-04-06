import Card from "@/components/Shared/FeatureMedia";

export type CardItem = {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  poster?: string;
  imageSrc?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  items: CardItem[];
};

export default function FeatureGroup({ title, subtitle, items }: Props) {
  return (
    <section className="w-full py-4 lg:py-8 px-4 md:px-8 lg:px-16">
      {/* Inline Section Header */}
      <div className="mb-10">
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900">
          {title}
        </h3>

        {subtitle && (
          <h4 className="mt-2 text-sm sm:text-base lg:text-lg text-gray-500 max-w-xl">
            {subtitle}
          </h4>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {items.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
