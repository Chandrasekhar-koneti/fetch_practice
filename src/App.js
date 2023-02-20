import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const[movies,setmovies]=useState([])
  const[isLoading,setisLoading]=useState(false)
  const[error,seterror]=useState(null)


  const fetchmovieshandler=useCallback(async()=>{
    setisLoading(true)
    seterror(null)
    try{
      const response=await fetch('https://swapi.dev/api/films/')
      if(!response.ok){
        throw new Error('something went wrong...retrying')
      }
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
    catch(error){
      seterror(error.message)
    }
    setisLoading(false)

  },[])

  useEffect(()=>{
    fetchmovieshandler()
  },[fetchmovieshandler])

  let content=<p>No Movies Found</p>
  if(movies.length>0){
    content=<MoviesList movies={movies} />
  }
  if(error){
    content=<p>{error}</p>
  }
  if(isLoading){
    content=<p>Loading....</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchmovieshandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
        {/* {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && !error && <p>No Movies Found</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading.....</p>} */}
      </section>
    </React.Fragment>
  );
}

export default App;
