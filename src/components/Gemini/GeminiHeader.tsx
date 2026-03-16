import Image from "next/image";

const GeminiHeader = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="flex items-center gap-3 font-normal text-5xl md:text-6xl lg:text-7xl">
        Try
        <Image
          src="/logo/Bhobbi-logo.png"
          alt="Bhobbi"
          width={80}
          height={80}
          className="w-32 md:w-40 lg:w-52 object-contain"
        />
        <Image
          src="/logo/studio.png"
          alt="Studio"
          width={80}
          height={80}
          className="w-32 md:w-40 lg:w-52 object-contain"
        />
      </h1>
    </div>
  );
};

export default GeminiHeader;
