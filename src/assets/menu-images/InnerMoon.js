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

export default function InnerMoon({ rotationClass }) {
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
    >
      <g transform="translate(-285.67 -68.125)">
        <path
          id={pointerID}
          d="M-240.231 129.088c14.975-8.646 54.805 31.642 69.78 40.288 14.976 8.646 69.781 22.996 69.781 40.288 0 17.292-54.805 31.642-69.78 40.288-14.976 8.646-54.806 48.934-69.781 40.288-14.976-8.646 0-63.284 0-80.576 0-17.292-14.976-71.93 0-80.576z"
          paintOrder="stroke markers fill"
          stopColor="#000"
          transform="matrix(-.25744 .02077 -.02073 -.2583 471.94 377.11)"
        ></path>
        <circle
          id="circle3020"
          cx="-247.233"
          cy="-418.929"
          r="131.231"
          fill="#232333ff"
          strokeWidth="1"
          display="inline"
          paintOrder="stroke markers fill"
          stopColor="#000"
          transform="rotate(145.647)"
        ></circle>
      </g>
      {/* <path
        className="outer-ring"
        fill="#434358"
        d="M151.12 7.043a131.23 131.23 0 00-70.328 22.838 131.23 131.23 0 00-34.289 182.39 131.23 131.23 0 00182.39 34.289A131.23 131.23 0 00263.18 64.17 131.23 131.23 0 00151.12 7.045zm.268 9.38a121.85 121.85 0 01104.05 53.042 121.85 121.85 0 01-31.838 169.35 121.85 121.85 0 01-169.35-31.836 121.85 121.85 0 0131.836-169.35 121.85 121.85 0 0165.3-21.203z"
        style={{ fontVariationSettings: "'wght' 200" }}
        paintOrder="stroke markers fill"
      ></path>
      <path
        className="arrow"
        fill="#434358"
        d="M245.438 270.657c-3.676 2.544-14.765-7.035-18.8-8.957s-18.44-4.491-18.8-8.958 13.454-9.31 17.13-11.855 13.094-13.778 17.129-11.856 1.312 16.346 1.67 20.813 5.347 18.268 1.671 20.813z"
        style={{ fontVariationSettings: "'wght' 200" }}
        paintOrder="stroke markers fill"
      ></path> */}
    </svg>
  );
}
