import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {

  // async function deletehandler(){
  //   const response=await fetch('https://react-http-practice-10e53-default-rtdb.firebaseio.com/movies/id.json',{
  //       method:'DELETE',
  //       body:JSON.stringify(Movie),
  //       headers:{
  //         'Content-Type':'application/json'
  //       }
  //     })
  //     const data=await response.json()
    
  // }
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      {/* <button onClick={deletehandler}>delete</button> */}

    </li>
  );
};

export default Movie;
