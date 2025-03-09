import { GiPopcorn } from "react-icons/gi";
import { RiMovie2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { SlFilm } from "react-icons/sl";


const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
  return (
    <header>
      <NavLink to="/" className={s.mainTitle}>
        <SlFilm />
        FilmSearch
      </NavLink>
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

export default Navigation;
