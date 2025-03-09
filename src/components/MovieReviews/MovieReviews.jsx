import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsByMovieId } from "../../services/api";
import s from "./MovieReviews.module.css"

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, setMovieReviews] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchReviewsByMovieId(movieId.toString());
      setMovieReviews(data);
    };
    getData();
  }, [movieId]);

  if (!movieReviews) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {movieReviews.length !== 0 ? (
        <div className={s.container}>
          <ul>
            {movieReviews.map((item) => (
              <li key={item.id}>
                <p className={s.author}>Author: {item.author}</p>
                <p>{item.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>We don`t have any reviews for this movie.</p>
      )}
    </>
  );
};
export default MovieReviews;
