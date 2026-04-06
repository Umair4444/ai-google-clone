import FeatureCard from "@/components/Shared/FeatureCard";

type Props = {
  title: string;
  description: string;
  link: string;
  videoSrc?: string;
  poster?: string;
  imageSrc?: string;
};

export default function FeatureMedia({
  title,
  description,
  link,
  videoSrc,
  poster,
  imageSrc,
}: Props) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden">
      {/* Media */}
      <FeatureCard 
        type={videoSrc ? "video" : "image"} 
        src={videoSrc || imageSrc || ""} 
        poster={poster}
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Footer */}
      <div className="p-5 pt-0">
        <a
          href={link}
          target="_blank"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Learn more →
        </a>
      </div>
    </div>
  );
}
