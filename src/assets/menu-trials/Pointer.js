import "../../css/MoonMenu.css";

// const rotationList = [
//   "about-selected-from-blogs-and-art",
//   "about-selected-from-sites",
//   "blogs-and-art-selected-from-about",
//   "blogs-and-art-selected-from-sites",
//   "sites-selected-from-about",
//   "sites-selected-from-blogs-and-art",
//   "blogs-and-art-selected-from-blogs-and-art",
// ];

export default function Pointer({ rotationClass }) {
  // console.log(`InnerMoon: ${rotationClass}`);
  // let pointerID = "inactive-pointer";
  // if (rotationList.includes(rotationClass)) {
  //   pointerID = "active-pointer";
  // }

  return (
    <svg
      // id={rotationClass}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 360 360"
    >
      <g transform="translate(-285.67 -68.125)">
        <path
          // id={pointerID}
          strokeOpacity="1"
          strokeWidth="4.975"
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
          fill="none"
          stroke="var(--sweet-perfume)"
          strokeWidth="1"
          display="inline"
          paintOrder="stroke markers fill"
          stopColor="#000"
          transform="rotate(145.647)"
        ></circle>
        <circle
          id="circle320"
          cx="-247.233"
          cy="-418.929"
          r="60"
          fill="var(--packing-paper)"
          display="inline"
          stopColor="#000"
          transform="rotate(145.647)"
        ></circle>
      </g>
    </svg>
  );
}
