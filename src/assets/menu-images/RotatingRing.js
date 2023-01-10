import "../../css/MoonMenu.css";

const rotationList = [
  "about-selected-from-blogs-and-art",
  "about-selected-from-sites",
  "blogs-and-art-selected-from-about",
  "blogs-and-art-selected-from-sites",
  "sites-selected-from-about",
  "sites-selected-from-blogs-and-art",
  "blogs-and-art-selected-from-blogs-and-art",
];

export default function RotatingRing({ rotationClass }) {
  // console.log(`InnerMoon: ${rotationClass}`);
  let pointerID = "inactive-pointer";
  if (rotationList.includes(rotationClass)) {
    pointerID = "active-pointer";
  }

  return (
    <svg
      className="inner-moon"
      id={rotationClass}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 360 360"
      opacity="50%"
    >
      <path
        className="arrow"
        id={pointerID}
        fill="#434358"
        d="M245.438 270.657c-3.676 2.544-14.765-7.035-18.8-8.957s-18.44-4.491-18.8-8.958 13.454-9.31 17.13-11.855 13.094-13.778 17.129-11.856 1.312 16.346 1.67 20.813 5.347 18.268 1.671 20.813z"
        style={{ fontVariationSettings: "'wght' 200" }}
        paintOrder="stroke markers fill"
      ></path>
      {/* <circle
        className="dark-bg"
        cx="-49.836"
        cy="-201.49"
        r="121.85"
        fill="#232333"
        transform="rotate(145.65)"
        style={{ fontVariationSettings: "'wght' 200" }}
        paintOrder="stroke markers fill"
      ></circle> */}
      {/* <path
        fill="#232333"
        d="M151.12 7.043a131.23 131.23 0 00-70.328 22.838c-59.835 40.898-75.186 122.56-34.289 182.39 40.898 59.836 122.56 75.188 182.39 34.289C288.728 205.661 304.079 124 263.18 64.17A131.228 131.228 0 00151.12 7.045zm5.934 29.884a107.02 107.02 0 0191.39 46.587c33.352 48.796 20.832 115.39-27.964 148.74-48.796 33.353-115.39 20.834-148.74-27.962-33.354-48.796-20.835-115.39 27.962-148.75a107.023 107.023 0 0157.355-18.623z"
        style={{ fontVariationSettings: "'wght' 200" }}
        paintOrder="stroke markers fill"
      ></path> */}
    </svg>
  );
}
