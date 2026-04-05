import GeminiHeader from "@/components/Gemini/GeminiHeader";
import VideoSection from "@/components/VideoSection";

const AboutPage = () => {
  return (
    <main>
      {/* Header */}
      <GeminiHeader title="Making AI work in businesses and an impact to everyday lives" />

      {/* Video Section */}
      <VideoSection
        src="https://storage.googleapis.com/gdm-deepmind-com-prod-public/media/media/applying-AI-to-help-solve_societys.mp4"
        autoPlay
        loop
        muted
        overlay
      />
    </main>
  );
};

export default AboutPage;
