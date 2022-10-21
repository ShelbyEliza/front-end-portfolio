import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/my-sites">My Sites</NavLink>
        </li>
        <li>
          <NavLink to="/blogs-&-art">Blogs & Art</NavLink>
        </li>
        <li>
          <NavLink to="/contact-me">Get in Touch</NavLink>
        </li>
        <li>
          <NavLink to="/design-guide">Design Guide</NavLink>
        </li>
      </ul>
    </nav>
  );
}
