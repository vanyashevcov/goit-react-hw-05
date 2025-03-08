import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map((item) => (
          <li key={item.id} className={s.img_container}>
            <Link to={`/movies/${item.id.toString()}`} state={location}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                alt={item.original_title}
              />
              <span>{item.original_title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
