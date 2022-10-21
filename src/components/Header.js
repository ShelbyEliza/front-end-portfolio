import { ReactComponent as Logo } from "../assets/logo-1.svg";
// import River from "../assets/river.jpg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      class="flex justify-center bg-white p-20"
      // style={{
      //   backgroundImage: `url(${River})`,
      //   backgroundSize: "100%",
      // }}
    >
      <Link to="/" class="rounded-full  p-8">
        <Logo />
      </Link>
      {/* <div
        style={{
          backgroundImage: `url(${River})`,
        }}
      >
        hello
      </div> */}
    </div>
  );
}
