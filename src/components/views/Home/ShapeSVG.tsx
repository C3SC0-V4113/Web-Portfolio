export const ShapeSVG = () => {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="h-40"
    >
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop id="stop1" stopColor="#CF6317" offset="0%"></stop>
          <stop id="stop2" stopColor="#5C2C0A" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        d="M25.9,-20.9C29.1,-16.6,24.3,-6.1,21.3,4.1C18.3,14.2,17.3,23.9,12.2,27.1C7,30.3,-2.1,26.9,-10.9,22.7C-19.7,18.4,-28.1,13.4,-29.8,6.7C-31.4,-0.1,-26.3,-8.5,-20.2,-13.5C-14.1,-18.4,-7.1,-20,2.1,-21.7C11.3,-23.4,22.6,-25.2,25.9,-20.9Z"
        transform="translate(50 50)"
        strokeWidth="0"
      ></path>
    </svg>
  );
};
