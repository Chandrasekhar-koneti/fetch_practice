import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setmovies]=useState([])
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  async function fetchmovieshandler(){
    const response=await fetch('https://swapi.dev/api/films/')
    const data=await response.json()
    const transformedmovies=data.results.map(moviedata=>{
      return {
        id:moviedata.title,
        title:moviedata.title,
        openeningtext:moviedata.opening_crawl,
        releasedate:moviedata.release_date
      }
    })
    setmovies(transformedmovies)
 
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieshandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
