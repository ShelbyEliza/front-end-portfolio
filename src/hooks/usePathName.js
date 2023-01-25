import { useLocation } from "react-router-dom";

export default function usePathName() {
  const regex = /[a-z -]/g;
  let locationPath = useLocation().pathname;

  if (
    // locationPath !== "/about" &&
    locationPath !== "/blogs-and-art" &&
    locationPath !== "/sites"
  ) {
    locationPath = "/about";
  }

  let pathName = locationPath.match(regex).join("");

  return pathName;
}
