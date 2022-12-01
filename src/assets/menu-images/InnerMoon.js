import "../../css/MoonMenu.css";

export default function InnerMoon({ rotationClass }) {
  let pointerID = "inactive-pointer";
  if (rotationClass !== "") {
    pointerID = "active-pointer";
  }

  return (
    <svg
      id="inner-moon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 360 360"
    >
      <g transform="translate(-285.67 -68.125)">
        <path
          id={pointerID}
          // fill="#2f2f44"
          // stroke="#b0b0ff"
          // strokeDasharray="none"
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
          fill="#2f2f44"
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
          r="1"
          fill="var(--packing-paper)"
          display="inline"
          stopColor="#000"
          transform="rotate(145.647)"
        ></circle>
      </g>
    </svg>
  );
}
