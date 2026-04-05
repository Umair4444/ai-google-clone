type Props = {
  type: "image" | "video";
  src: string;
  poster?: string;
};

export default function FeatureCard({ type, src, poster }: Props) {
  return (
    <div className="w-full aspect-video overflow-hidden rounded-xl bg-gray-100">
      {type === "image" ? (
        <img src={src} alt="" className="w-full h-full object-cover" />
      ) : (
        <video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}
