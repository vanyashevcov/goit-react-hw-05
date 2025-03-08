import { GiPopcorn } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          <GiPopcorn size={25} />
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          <RiMovie2Fill size={25} />
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
