import { useEffect, useState } from "react";
import { fetchMoviesByQuery } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css"
import { FaSearch } from "react-icons/fa";


const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const onSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);
  };

  const initialValues = {
    query,
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoviesByQuery({ query });
      setMovies(data);
    };
    getData();
  }, [query]);

  const handleChangeQuery = (value) => {
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <div className={s.container}>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form className={s.form}>
            <Field name="query" className={s.imput} />
            <button
              onSubmit={handleChangeQuery}
              type="submit"
              className={s.btn}
            >
              <FaSearch />
            </button>
          </Form>
        </Formik>
      </div>
      <MovieList movies={movies} />
    </>
  );
};
export default MoviesPage;
