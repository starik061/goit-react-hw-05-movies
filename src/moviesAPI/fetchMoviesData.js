export const fetchTrendingMovies = () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDYyYWMyZWNiZjNmYjk1YWM5Mzc1ZWNmMDY1Y2M5NiIsInN1YiI6IjY0Nzg1NDRhMDc2Y2U4MDBjNTBhZDZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dj9JHo6BS7b-nDH8R0SXWEYbjX-5KPxmVhRCe0GPRME',
    },
  };

  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
    .then(response => response.json())
    .then(response => {
      console.log(response.results);
      return response.results;
    })
    .catch(err => console.error(err));
};
