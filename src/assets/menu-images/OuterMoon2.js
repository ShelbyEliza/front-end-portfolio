// css:
import "../../css/MoonMenu.css";

const topBoxStyles = {
  fill: "var(--fawn)",
  fillOpacity: "0.14",
  paintOrder: "stroke markers fill",
};
const backBoxStyles = {
  fill: "var(--fawn)",
  fillOpacity: "0.447",
  paintOrder: "stroke markers fill",
};
const textPathStyles = {
  fill: "#fff",
  strokeWidth: "1.35",
};

export default function OuterMoon2({ rotationClass }) {
  return (
    <svg
      id={rotationClass}
      className="outer-moon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 360 360"
    >
      <g transform="translate(-285.67 -68.125)">
        <circle
          cx="495.97"
          cy="180.06"
          r="180"
          fill="#bca85e"
          paintOrder="stroke markers fill"
          stopColor="#000"
          transform="rotate(8.097)"
        ></circle>
      </g>
      <g strokeWidth="1.049">
        {/** ----------- Blogs and Art ----------- */}
        <path
          id="blogs-and-art-back-box"
          style={backBoxStyles}
          d="M220.664 315.138c-44.014 13.551-93.775 5.428-131.982-26.042L57.59 324.385l2.524 2.115c25.66 20.784 57.105 35.1 92.177 40.078 27.376 3.885 54.213 1.69 79.145-5.56l1.332-.392-10.485-46.016z"
          transform="translate(9.575 8.636) scale(.95349)"
        ></path>
        <path
          id="blogs-and-art-text-path"
          style={textPathStyles}
          aria-label="Blogs &amp; Art"
          d="M95.233 299.81q2.648 1.853 3.319 3.964t-1.073 4.6q-.807 1.154-1.924 1.857-1.117.702-2.433.797-1.297.068-2.755-.64l.215-.475q1.22 1.049 1.898 2.423.679 1.373.619 2.855-.016 1.473-.952 2.81-.844 1.206-1.958 1.793-1.096.561-2.35.621-1.234.034-2.477-.367-1.224-.427-2.351-1.216l-4.614-3.23 12.956-18.508zm-5.537 9.249q2.123 1.486 3.83 1.001 1.707-.485 2.9-2.189 1.504-2.15.915-3.93-.59-1.78-2.661-3.23l-3.015-2.11-5.56 7.943zm-6.15 8.897q1.337.936 2.731 1.287 1.413.325 2.692-.107 1.306-.414 2.224-1.725.99-1.416.854-2.84-.11-1.404-.962-2.587-.833-1.208-1.987-2.016l-3.618-2.532-5.578 7.97zM105.59 304.66l.936.555-12.35 20.803-.935-.555zM100.91 322.87q.806-1.6 2.24-2.526 1.434-.926 3.138-1.035 1.732-.095 3.36.726 1.63.82 2.555 2.255t1.02 3.166q.11 1.703-.682 3.275-.806 1.6-2.24 2.526-1.42.897-3.123 1.006-1.704.11-3.361-.726-1.63-.82-2.57-2.226t-1.063-3.08q-.124-1.675.726-3.36zm.972.49q-.706 1.4-.639 2.831.11 1.417.865 2.622.783 1.219 2.126 1.895 1.343.677 2.76.567 1.418-.11 2.622-.865 1.219-.783 1.925-2.183.676-1.343.58-2.79-.095-1.445-.85-2.65-.74-1.232-2.083-1.91-1.372-.69-2.846-.537-1.446.167-2.637.964-1.19.798-1.824 2.056zM116.81 343.6q-.867-.332-1.653-.872-.757-.53-1.46-1.381-.672-.84-1.274-2.132l.861-.459q.872 1.841 1.859 2.664.975.853 1.962 1.23 1.942.744 3.288.54 1.335-.175 2.172-1.02.867-.833 1.396-2.035l1.539-3.934.166.372q-1.257 1.403-3.211 1.855-1.913.433-3.826-.3-1.614-.617-2.65-1.938-1.036-1.322-1.328-2.975-.281-1.684.36-3.358.674-1.763 1.996-2.8 1.362-1.054 3.023-1.275 1.702-.24 3.376.401 1.703.652 2.813 2.139t1.207 3.203l-.332.42 1.487-3.439.867.332-4.483 11.716q-.526 1.374-1.562 2.383-1.037 1.008-2.68 1.27-1.642.263-3.913-.607zm-.784-13.354q-.548 1.435-.307 2.863.241 1.429 1.144 2.562t2.307 1.671q1.405.538 2.78.345 1.388-.223 2.476-1.006 1.129-.802 1.646-1.975l.583-1.524q.218-1.287-.174-2.5-.363-1.2-1.233-2.15-.859-.98-2.144-1.471-1.405-.537-2.822-.326t-2.55 1.114q-1.123.873-1.706 2.397zM133.19 343.07q-.954-.273-1.964-.928-.971-.678-1.402-1.733l.708-.496q.378.773 1.103 1.38.756.616 1.77.907.708.202 1.416.172.739-.022 1.328-.452.59-.43.853-1.353.256-.893-.096-1.526-.35-.633-1.01-1.121-.62-.51-1.38-.994-1.107-.783-1.775-1.707-.667-.923-.28-2.277.282-.984.937-1.529.664-.575 1.57-.716.914-.17 1.837.094.83.238 1.635.8.835.572 1.362 1.522l-.704.598q-.33-.827-1.09-1.31-.72-.507-1.335-.683-.554-.158-1.2-.11-.646.048-1.178.395-.532.347-.752 1.116-.203.707.034 1.274.268.576.795 1.06.536.453 1.142.893.783.524 1.477 1.122t1.04 1.363q.348.765.048 1.811-.29 1.015-.95 1.692-.66.676-1.653.891-.994.215-2.286-.155zM167.9 349.15l-.286-.035-.445-.053-.413-.05-.159-.02-10.073-16.917q-.2-.475-.424-1.018-.189-.57-.307-1.198-.082-.654.006-1.385.173-1.43.975-2.46.802-1.032 2.054-1.525 1.252-.493 2.714-.316 1.397.169 2.508.851 1.113.65 1.866 1.354l-.596.67q-.877-.751-1.815-1.252-.939-.5-1.956-.623-1.779-.215-3.089.754-1.306.938-1.513 2.654-.093.762.045 1.488.174.698.346 1.138.204.444.2.475zm-8.668-12.814q-1.052-.095-2.182.187-1.126.25-2.136.87-.978.623-1.64 1.574-.664.951-.814 2.19-.188 1.557.492 2.864.715 1.28 2.032 2.116 1.318.836 3.001 1.04 1.398.169 2.69-.126 1.297-.327 2.28-.981 1.013-.651 1.533-1.49l.603.878q-1.006 1.393-3.004 2.183-1.965.794-4.316.51-2.129-.259-3.68-1.284-1.517-1.054-2.297-2.599-.748-1.541-.54-3.257.168-1.397.91-2.468.746-1.102 1.866-1.837 1.125-.767 2.453-1.09 1.364-.35 2.766-.213zm9.42.205l1.112.135-4.558 8.635-.71-.795zM182.33 349.61l7.765-24.218.096-.007 11.1 22.896-1.245.087-10.08-21.17.74-.406-7.259 22.74zm3.617-9.268l10.502-.736.327 1.004-10.981.77zM204.79 335.07l.761 3.733-.195-.389q.186-1.2.873-2.127.713-.964 1.717-1.556 1.03-.629 2.097-.842l.144 1.047q-1.42.24-2.48 1.069-1.03.823-1.548 1.981-.518 1.159-.288 2.516l1.131 6.689-1.072.181-2.055-12.147zM213.58 327.9l1.09-.254 1.269 5.455 3.833-.89.203.872-3.834.89 2.536 10.91-1.091.253-2.535-10.909-2.65.616-.203-.873 2.65-.615z"
          transform="translate(9.575 8.636) scale(.95349)"
        ></path>
        <path
          id="blogs-and-art-top-box"
          style={topBoxStyles}
          d="M220.664 315.138c-44.014 13.551-93.775 5.428-131.982-26.042L57.59 324.385l2.524 2.115c25.66 20.784 57.105 35.1 92.177 40.078 27.376 3.885 54.213 1.69 79.145-5.56l1.332-.392-10.485-46.016z"
          transform="translate(9.575 8.636) scale(.95349)"
        ></path>
        {/** ----------- About ----------- */}
        <path
          id="about-back-box"
          style={backBoxStyles}
          d="M285.531 273c-17.212 19.704-38.763 33.534-62.045 41.238l-1.21.376 10.486 46.015c32.337-9.662 61.41-27.844 84.213-52.286l1.645-1.812-31.617-35.245z"
          transform="translate(9.575 8.636) scale(.95349)"
        ></path>
        <path
          id="about-text-path"
          style={textPathStyles}
          aria-label="About"
          d="M236.61 339.89l-.384-25.43.089-.037 17.837 18.146-1.152.48-16.32-16.836.573-.621.39 23.867zm.464-9.938l9.716-4.054.63.846-10.158 4.24zM264.26 327.2q-1.7.96-3.612.827-1.928-.16-3.328-1.207l-.183-.779 2.109 3.734-.947.535-11.898-21.064.947-.535 7.759 13.736-.43-.566q-.158-1.711.735-3.318.905-1.651 2.605-2.611 1.504-.85 3.155-.79 1.663.016 3.096.86 1.46.83 2.357 2.418 1.023 1.81.967 3.533-.044 1.679-.936 3.028t-2.396 2.199zm-.596-.73q1.477-.833 2.19-2.044.696-1.24.64-2.64-.029-1.418-.816-2.81-.724-1.283-1.95-2.023-1.2-.756-2.62-.799-1.409-.086-2.858.732-1.198.677-1.945 1.76-.72 1.069-.9 2.31-.154 1.226.253 2.466l.865 1.533q.67 1.055 1.862 1.668 1.175.585 2.58.6 1.418-.028 2.7-.752zM268.94 316.97q-1.034-1.463-1.179-3.164-.144-1.7.56-3.256.729-1.574 2.218-2.627 1.49-1.052 3.19-1.197t3.275.586q1.555.703 2.571 2.14 1.034 1.463 1.179 3.164.125 1.675-.578 3.23t-2.219 2.626q-1.49 1.053-3.171 1.224-1.683.17-3.22-.507-1.536-.677-2.626-2.219zm.888-.628q.906 1.28 2.2 1.893 1.304.568 2.722.467 1.443-.12 2.672-.987 1.228-.868 1.796-2.171t.467-2.721q-.12-1.444-1.024-2.724-.869-1.229-2.19-1.823t-2.74-.493q-1.436.075-2.664.943-1.254.886-1.811 2.26-.531 1.355-.386 2.78.146 1.426.958 2.576zM289.87 309.36q-1.333 1.15-2.777 1.042-1.445-.107-2.58-1.326l-5.828-6.762.824-.71 5.662 6.568q.863.904 2.009 1.057 1.125.128 2.306-.805.945-.815 1.351-2.01.43-1.216.23-2.479-.178-1.284-1.097-2.35l-4.45-5.163.824-.71 8.044 9.332-.727.627-2.604-2.826.542.336q.405.96.322 2.088-.084 1.129-.62 2.223-.534 1.095-1.43 1.868zM286.9 287.63l.79-.794 3.972 3.946 2.774-2.792.636.632-2.774 2.792 7.945 7.894-.79.795-7.945-7.894-1.917 1.929-.636-.631 1.918-1.93z"
          transform="translate(9.575 8.636) scale(.95349)"
        ></path>
        <path
          id="about-top-box"
          style={topBoxStyles}
          d="M285.531 273c-17.212 19.704-38.763 33.534-62.045 41.238l-1.21.376 10.486 46.015c32.337-9.662 61.41-27.844 84.213-52.286l1.645-1.812-31.617-35.245z"
          transform="translate(9.575 8.636) scale(.95349)"
        ></path>
        {/** ----------- Sites ----------- */}
        <path
          id="sites-back-box"
          style={backBoxStyles}
          d="M317.975 307.215a187.597 187.597 0 0041.138-71.604l.856-2.923-45.555-11.626c-5.479 17.973-14.642 35.145-27.581 50.374l-1.259 1.461 31.075 35.721z"
          transform="translate(9.575 8.636) scale(.95349) rotate(-.873 180 180)"
        ></path>
        <path
          id="sites-text-path"
          style={textPathStyles}
          aria-label="Sites"
          d="M303.11 263.85q-.905.525-2.095 1.436t-2.066 2.094q-1.388 1.88-1.266 3.76.115 1.836 1.53 2.882 1.082.799 2.278.688 1.17-.13 2.4-.772 1.25-.669 2.563-1.53 1-.653 2.077-1.249 1.078-.596 2.202-.88 1.144-.308 2.323-.074 1.173.19 2.434 1.122 1.544 1.142 2.17 2.718.625 1.576.336 3.313-.314 1.717-1.512 3.339-1.046 1.415-2.218 2.3-1.178.84-2.205 1.315-1.053.455-1.614.677l-.423-.99q.785-.254 1.831-.754 1.02-.52 2.007-1.263 1.006-.768 1.748-1.772.875-1.184 1.21-2.607.355-1.449-.084-2.848-.42-1.424-1.886-2.508-1.39-1.027-2.753-.96-1.37.023-2.69.679-1.32.655-2.632 1.516-.975.672-1.982 1.281-1.013.564-2.041.879t-2.072.219q-1.025-.12-2.03-.863-1.26-.931-1.711-2.26-.458-1.372-.18-2.878.296-1.532 1.342-2.947.837-1.133 2.116-2.217 1.278-1.084 2.445-1.694zM312.63 264.11l.58-.92 10.42 6.575-.581.92zm-3.76-1.956q-.298-.188-.36-.569t.142-.704q.187-.298.54-.378.37-.107.668.08.325.206.388.586.08.353-.108.65-.205.326-.575.432t-.695-.098zM311.86 254.99l.55-.976 4.88 2.746 1.93-3.43.78.44-1.93 3.43 9.761 5.493-.55.976-9.76-5.493-1.334 2.37-.78-.44 1.333-2.37zM333.93 251.25q-.786 1.681-2.163 2.663-1.406.967-3.077 1.14-1.685.13-3.338-.642-1.594-.746-2.562-2.152-.954-1.435-1.113-3.134-.188-1.713.584-3.366.895-1.913 2.635-2.689 1.754-.805 3.82-.616l-.735 11.773-.889-.062.653-11.07.253.366q-1.475-.018-2.846.648-1.357.637-2.048 2.115-.637 1.363-.486 2.776.152 1.413.971 2.608.804 1.153 2.195 1.804 1.304.61 2.749.543 1.415-.08 2.654-.843 1.225-.805 1.916-2.284.447-.956.506-1.989.043-1.075-.24-2.055l.968-.183q.272 1.081.19 2.314-.069 1.205-.597 2.335zM338.88 239.5q-.348.93-1.081 1.885-.752.914-1.838 1.26l-.439-.745q.801-.316 1.464-.99.674-.705 1.044-1.694.257-.69.283-1.397.037-.738-.346-1.36-.382-.621-1.281-.957-.87-.326-1.528-.025-.66.3-1.198.918-.558.577-1.1 1.297-.868 1.042-1.842 1.634-.973.593-2.292.1-.959-.36-1.45-1.056-.521-.707-.59-1.621-.097-.925.24-1.824.302-.81.927-1.567.636-.787 1.624-1.237l.54.749q-.85.263-1.392.982-.562.679-.786 1.278-.202.54-.205 1.187-.003.648.3 1.206.305.558 1.054.838.69.258 1.273.067.596-.222 1.12-.709.494-.498.98-1.068.584-.738 1.235-1.383.651-.645 1.441-.93t1.81.096q.988.37 1.61 1.081.623.711.758 1.719.136 1.007-.335 2.266z"
          transform="translate(9.575 8.636) scale(.95349) rotate(-.873 180 180)"
        ></path>
        <path
          id="sites-top-box"
          style={topBoxStyles}
          d="M317.975 307.215a187.597 187.597 0 0041.138-71.604l.856-2.923-45.555-11.626c-5.479 17.973-14.642 35.145-27.581 50.374l-1.259 1.461 31.075 35.721z"
          transform="translate(9.575 8.636) scale(.95349) rotate(-.873 180 180)"
        ></path>
      </g>
    </svg>
  );
}
