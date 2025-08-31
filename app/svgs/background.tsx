const Background = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"100vw"}
    height={1030}
    fill="none"
  >
    <g filter="url(#a)">
      <path
        fill="#3B2559"
        d="M538.5 938.5C308.9 831.3 82.167 820.603 0 865.27V0h1440.5v869c-296 170.9-615 203.5-902 69.5Z"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={1448.5}
        height={1029.28}
        x={-4}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_70_353" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_70_353"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Background;
