import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Navigation/Header'
import HomePage from './pages/HomePage/HomePage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import MoviesPage from './pages/MoviesPage/MoviesPage'
import MovieList from './components/MovieList/MovieList'


function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          {/* <Route path="movielist" element={<MovieList />} /> */}
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App
