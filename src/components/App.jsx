import { Routes, Route } from 'react-router-dom';

import SharedLayoutHeader from './SharedLayoutHeader/SharedLayoutHeader';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayoutHeader />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Movies />} />
          <Route path="reviews" element={<Movies />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
