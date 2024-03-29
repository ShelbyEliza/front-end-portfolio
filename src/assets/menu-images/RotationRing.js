import "../../components-css/MoonMenu.css";

function RotationRing() {
  return (
    <svg
      className="rotation-ring"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 360"
      aria-label="A pointer that indicates what page is open"
    >
      <g paintOrder="stroke markers fill">
        <path
          fill="var(--umbra)"
          d="M436.79 75.168a131.23 131.23 0 00-70.328 22.838c-59.835 40.898-75.186 122.56-34.289 182.39 38.349 56.107 112.54 73.101 170.97 41.283 3.884-2.115 16.658 6.144 20.387 3.595 4.14-2.83-.894-16.444 2.816-19.643 49.914-43.04 60.58-117.65 22.51-173.34a131.228 131.228 0 00-112.06-57.125zm5.934 29.884a107.02 107.02 0 0191.39 46.587c33.352 48.796 20.832 115.39-27.964 148.74-48.796 33.353-115.39 20.834-148.74-27.962-33.354-48.796-20.835-115.39 27.962-148.75a107.023 107.023 0 0157.355-18.623z"
          transform="translate(-285.67 -68.125)"
        ></path>
      </g>
    </svg>
  );
}

export default RotationRing;
