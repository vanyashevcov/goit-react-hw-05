import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState("");

  const location = useLocation();

  const goBackUrl = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById(movieId.toString());
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Link to={goBackUrl.current} className={s.goBack}>
        <IoIosArrowBack />
        Go back
      </Link>
      <div className={s.container}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
          className={s.img}
        />
        <div className={s.containerDetails}>
          <h2>{movie.original_title}</h2>
          <p className={s.data}>
            <CiCalendar />
            {movie.release_date}
          </p>
          <p className={s.score}>
            User Score: <span>{movie.popularity}%</span>
          </p>
          <p className={s.overview}>Overview</p>
          <p className={s.overviewDesc}>{movie.overview}</p>
          <div className={s.gentesContainer}>
            <p className={s.overview}>Genres</p>
            <ul>
              {movie.genres.map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h3>Additional information</h3>
      <nav className={s.nav}>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetailsPage;
