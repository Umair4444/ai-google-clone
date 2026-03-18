const newsItems = [
  {
    title:
      "Nano Banana 2: Combining Pro capabilities with lightning-fast speed",
    date: "February 2026",
    link: "https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/?utm_source=ai.google&utm_medium=referral",
    label: "Learn more",
    image:
      "https://lh3.googleusercontent.com/MNlOW_zVZ4eTMzs4GySN6gbaCiN7WA4MVb_dc4F78apzf9pfnG8_ZyjrJvxFbCDMc58m_BE0PZJz-Oz0mkJRV9cqI1V3vCw3ezGO0ghaYoRQOOuTJw=w1440-h1440-n-nu",
    alt: "Nano Banana 2 product image",
  },
  {
    title: "Building Personal Intelligence: a step towards truly personal AI",
    date: "January 2026",
    link: "https://ai.google/static/documents/building_personal_intelligence.pdf",
    label: "Learn more",

    alt: "Building personal AI illustration",
  },
  {
    title: "Gemini 3 Flash: frontier intelligence built for speed",
    date: "December 2025",
    link: "https://blog.google/products/gemini/gemini-3-flash/?utm_source=ai.google&utm_medium=referral",
    label: "Learn more",
    image:
      "https://lh3.googleusercontent.com/ZVPHS_Pn_BJzcmIRNeNsH6d4Uz-RyWX5rMAFKWbsYn3ur-q-89HZ58Yo0pF166hs_tWeA3I5L7alBS6FwjUzxzOIUac7YcQML8XeR2q-4o6L6xmGgg=w1440-h1440-n-nu",
    alt: "Gemini 3 Flash icon",
  },
  {
    title:
      "Introducing Gemini 3: Our most intelligent model that helps you bring any idea to life",
    date: "November 2025",
    link: "https://deepmind.google/models/gemini/?utm_source=ai.google&utm_medium=referral",
    label: "Learn more",
    image:
      "https://lh3.googleusercontent.com/8YQZI8vWbfbofijPtfKGhbyJTzfOzL7Vpq8YKUiTRWQjpH46MytGaie3QmMEpzlZjcPH_F9AJZCF2NG1sT9PqxonwpdxEyNty1e3KkdSIraiTmS4=w1440-h1440-n-nu",
    alt: "The Gemini 3 logo featuring a colorful diamond icon",
  },
];

type NewsItem = (typeof newsItems)[number];

function NewsCard({ title, date, link, label, image, alt = "" }: NewsItem) {
  return (
    <article className="group relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1">
      {/* Full clickable overlay */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open article: ${title}`}
        className="absolute inset-0 z-10"
      />

      <div className="relative z-20 flex items-start gap-3 sm:gap-4 md:gap-6 p-3 sm:p-5 md:p-6">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between flex-1 min-h-[80px] sm:min-h-[100px]">
          {/* Title */}
          <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl xl:text-2xl font-medium text-gray-900 leading-tight line-clamp-3">
            {title}
          </h3>

          {/* Date + Label Row */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3">
            <time dateTime={date}>{date}</time>

            <span className="flex items-center gap-1 font-medium text-blue-600 transition-colors group-hover:text-blue-700">
              {label}
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        {image && (
          <div
            className="
            flex-shrink-0
            w-20 h-20
            sm:w-24 sm:h-24
            md:w-28 md:h-28
            lg:w-32 lg:h-32
            xl:w-36 xl:h-36
            overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl
          "
          >
            <img
              src={image}
              alt={alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      </div>
    </article>
  );
}

export default function NewsGroupSection() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 py-8 sm:py-10 lg:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-6 sm:mb-8">
        Latest News
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
