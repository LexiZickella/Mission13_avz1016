import { useEffect, useState } from 'react';
import { Movie } from '../types/movie';

function MovieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/Movie'); // this needs the correct link from asp.net
      const temp = await rsp.json();
      const editedMovies = temp
        .filter((m: { edited: string }) => m.edited === 'Yes')
        .sort((a: { title: string }, b: { title: any }) =>
          a.title.localeCompare(b.title),
        );
      setMovieData(editedMovies);
    };
    console.log(movieData);
    fetchMovie();
  }, []);

  return (
    <>
      <div className="row">
        <h4>The Joel Hilton Movie Collection</h4>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Category:</th>
            <th>Title:</th>
            <th>Year:</th>
            <th>Director:</th>
            <th>Rating:</th>
            <th>Edited:</th>
            <th>Lent To:</th>
            <th>Notes:</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((m) => (
            <tr key={m.movieId}>
              <td>{m.category}</td>
              <td>{m.title}</td>
              <td>{m.year}</td>
              <td>{m.director}</td>
              <td>{m.rating}</td>
              <td>{m.edited}</td>
              <td>{m.lentTo}</td>
              <td>{m.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
