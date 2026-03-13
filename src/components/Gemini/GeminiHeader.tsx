const GeminiHeader = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-7xl font-normal flex items-center gap-3">
        Try
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="gemini-sparkle-icon"
        >
          <mask
            id="mask0"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="56"
            height="56"
          >
            <path
              d="M28 0C28.5872 0 29.0979 0.40102 29.2412 0.970703C29.6804 2.71332 30.2538 4.41291 30.9668 6.06641C32.824 10.3808 35.372 14.1572 38.6074 17.3926C41.8444 20.628 45.6192 23.176 49.9336 25.0332C51.5887 25.7462 53.2867 26.3196 55.0293 26.7588C55.599 26.9021 56 27.4128 56 28C56 28.5872 55.599 29.0979 55.0293 29.2412C53.2867 29.6804 51.5871 30.2538 49.9336 30.9668C45.6192 32.824 41.8428 35.372 38.6074 38.6074C35.372 41.8444 32.824 45.6192 30.9668 49.9336C30.2538 51.5887 29.6804 53.2867 29.2412 55.0293C29.0979 55.599 28.5872 56 28 56C27.4128 56 26.9021 55.599 26.7588 55.0293C26.3196 53.2867 25.7462 51.5871 25.0332 49.9336C23.176 45.6192 20.6296 41.8428 17.3926 38.6074C14.1556 35.372 10.3808 32.824 6.06641 30.9668C4.41131 30.2538 2.71332 29.6804 0.970703 29.2412C0.40102 29.0979 0 28.5872 0 28C0 27.4128 0.40102 26.9021 0.970703 26.7588C2.71332 26.3196 4.41291 25.7462 6.06641 25.0332C10.3808 23.176 14.1572 20.628 17.3926 17.3926C20.628 14.1572 23.176 10.3808 25.0332 6.06641C25.7462 4.41131 26.3196 2.71332 26.7588 0.970703C26.9021 0.40102 27.4128 0 28 0Z"
              fill="white"
            />
          </mask>

          <g mask="url(#mask0)">
            <ellipse
              cx="23.6679"
              cy="2.23608"
              rx="16.0951"
              ry="16.449"
              fill="#FC413D"
              filter="url(#filter1)"
            />
            <ellipse
              cx="58.1441"
              cy="21.8605"
              rx="15.8316"
              ry="15.2453"
              fill="#3983FF"
              filter="url(#filter5)"
            />
            <ellipse
              cx="16.3444"
              cy="49.5224"
              rx="16.8215"
              ry="21.7916"
              fill="#00B95C"
              filter="url(#filter2)"
            />
          </g>

          <defs>
            <filter
              id="filter1"
              x="-7.81911"
              y="-29.6048"
              width="62.9739"
              height="63.6822"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="7.69593" />
            </filter>

            <filter
              id="filter2"
              x="-13.5758"
              y="14.6556"
              width="59.8406"
              height="69.7336"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="6.54229" />
            </filter>

            <filter
              id="filter5"
              x="29.8783"
              y="-5.81895"
              width="56.5317"
              height="55.3586"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feGaussianBlur stdDeviation="6.21709" />
            </filter>
          </defs>
        </svg>
        Gemini
      </h1>
    </div>
  );
};

export default GeminiHeader;
