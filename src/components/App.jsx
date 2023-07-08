import { Routes, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Movies from 'pages/Movies';
import SharedLayoutHeader from './SharedLayoutHeader/SharedLayoutHeader';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayoutHeader />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
      <Route path="*" element={<SharedLayoutHeader />} />
    </Routes>
  );
};

export default App;
