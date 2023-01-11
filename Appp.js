import React,{useState} from 'react'
import { Movie } from './Movie';
export const Appp = () => {

    const [movies,setMovies]=useState([]);

   async function FetchMovieHandler() {
        const response= await fetch('https://swapi.dev/api/films/');
        const data=await response.json();
        
            const transformmovie=data.results.map(moviedata=>{
                return {
                    id:moviedata.eposide_id,
                    title:moviedata.title,
                    opentext:moviedata.opening_crawl

                }
            })
            
            setMovies(data.results);
        

    }
    // console.log(movies)
  return (
    <>
<div>
    <button onClick={FetchMovieHandler}>FetchData</button>
    <Movie movie={movies} />
</div>
    
    </>
  )
}
