import { useLocation } from "react-router-dom";

export default function usePathName() {
  const regex = /[a-z -]/g;
  const locationPath = useLocation().pathname;
  let pathName = locationPath.match(regex).join("");
  if (
    pathName !== "about" &&
    pathName !== "blogs-and-art" &&
    pathName !== "sites"
  ) {
    pathName = "home";
  }

  return pathName;
}
