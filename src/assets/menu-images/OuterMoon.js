// css:
import "../../css/MoonMenu.css";

// import { useState, useRef, useEffect } from "react";

const textStyle = {
  InkscapeStroke: "none",
  fontFeatureSettings: "normal",
  fontVariantAlternates: "normal",
  fontVariantCaps: "normal",
  fontVariantEastAsian: "normal",
  fontVariantLigatures: "normal",
  fontVariantNumeric: "normal",
  fontVariantPosition: "normal",
  fontVariationSettings: "'wght' 200",
  lineHeight: "1",
  WebkitTextDecorationColor: "#000000",
  textDecorationColor: "#000000",
  WebkitTextDecorationLine: "none",
  textDecorationLine: "none",
  WebkitTextDecorationStyle: "solid",
  textDecorationStyle: "solid",
  WebkitTextIndent: "0",
  textIndent: "0",
  WebkitTextOrientation: "mixed",
  textOrientation: "mixed",
  WebkitTextTransform: "none",
  textTransform: "none",
  whiteSpace: "normal",
  fontFamily: "'Josefin Sans Thin'",
  fontSize: "32",
};

export default function OuterMoon({ rotationClass }) {
  const logClick = (position) => {
    // console.log(position);
  };
  return (
    <svg
      id="outer-moon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 360 360"
    >
      <defs>
        {/** Text Paths */}
        <path
          id="pathAbout"
          fill="none"
          stroke="#2f2f44"
          d="M348.58 592.18a165.56 165.56 40.704 00227.57-55.065 165.56 165.56 40.704 00-55.065-227.57 165.56 165.56 40.704 00-227.57 55.065 165.56 165.56 40.704 0055.065 227.57z"
          stopColor="#000"
          style={{ fontVariationSettings: "'wght' 200" }}
          paintOrder="stroke markers fill"
        />
        <path
          id="pathBlogsAndArt"
          fill="none"
          stroke="#2f2f44"
          d="M445.3 616.09A165.56 165.56 5.683 00600.07 440.4a165.56 165.56 5.683 00-175.69-154.77 165.56 165.56 5.683 00-154.77 175.69A165.56 165.56 5.683 00445.3 616.09z"
          stopColor="#000"
          style={{ fontVariationSettings: "'wght' 200" }}
          paintOrder="stroke markers fill"
        />
        <path
          id="pathSites"
          fill="none"
          stroke="#2f2f44"
          d="M582.55 525.6a165.56 165.56 36.152 00-72.955-222.48 165.56 165.56 36.152 00-222.48 72.955 165.56 165.56 36.152 0072.955 222.48A165.56 165.56 36.152 00582.55 525.6z"
          stopColor="#000"
          style={{ fontVariationSettings: "'wght' 200" }}
          paintOrder="stroke markers fill"
        />
        {/** Animation Paths */}
        <path
          id="aboutToBlogsAndArt"
          d="m 409.77254,400.04491 c 47.55604,14.93978 99.02035,7.34031 139.95044,-19.30376"
        />
        <path
          id="aboutToSites"
          d="m 409.77254,400.04491 c 47.55604,14.93978 99.02035,7.34031 139.95044,-19.30376 20.05414,-13.05454 37.57942,-30.68096 50.87711,-52.46821 8.35982,-13.69693 14.49324,-28.12807 18.50238,-42.87133"
        />
        <path
          id="blogsAndArtToSites"
          d="m 549.72298,380.74115 c 20.05414,-13.05454 37.57942,-30.68096 50.87711,-52.46821 8.35982,-13.69693 14.49324,-28.12807 18.50238,-42.87133"
        />
        <path
          id="blogsAndArtToAbout"
          d="m 549.72298,380.74115 c -40.93009,26.64407 -92.3944,34.24354 -139.95044,19.30376"
        />
        <path
          id="sitesToBlogsAndArt"
          d="m 619.10247,285.40161 c -4.00914,14.74326 -10.14256,29.1744 -18.50238,42.87133 -13.29769,21.78725 -30.82297,39.41367 -50.87711,52.46821"
        />
        <path
          id="sitesToAbout"
          d="m 619.10247,285.40161 c -4.00914,14.74326 -10.14256,29.1744 -18.50238,42.87133 -13.29769,21.78725 -30.82297,39.41367 -50.87711,52.46821 -40.93009,26.64407 -92.3944,34.24354 -139.95044,19.30376"
        />
      </defs>
      <g transform="translate(-285.67 -68.125)">
        <circle
          id="outer-circle"
          cx="495.97"
          cy="180.06"
          r="180"
          fill="#bca85e"
          paintOrder="stroke markers fill"
          stopColor="#000"
          transform="rotate(8.097)"
          style={{ fontVariationSettings: "'wght' 200" }}
        ></circle>

        <g transform="translate(24.45 -208.84)">
          <text
            id={rotationClass + "-about-box"}
            onClick={(e) => logClick(e.target.id)}
            fontSize="32"
            style={textStyle}
          >
            <textPath xlinkHref="#pathAbout">
              <tspan id="about">About</tspan>
            </textPath>
          </text>
        </g>
        <g transform="translate(24.466 -208.84)">
          <text
            id={rotationClass + "-blogs-and-art-box"}
            onClick={(e) => logClick(e.target.id)}
            fontSize="32"
            style={textStyle}
          >
            <textPath xlinkHref="#pathBlogsAndArt">
              <tspan id="blogsAndArt">Blogs &amp; Art</tspan>
            </textPath>
          </text>
        </g>
        <g transform="translate(24.438 -208.82)">
          <text
            id={rotationClass + "-sites-box"}
            onClick={(e) => logClick(e.target.id)}
            fontSize="32"
            style={textStyle}
          >
            <textPath xlinkHref="#pathSites">
              <tspan id="sites">Sites</tspan>
            </textPath>
          </text>
        </g>
      </g>
    </svg>
  );
}
