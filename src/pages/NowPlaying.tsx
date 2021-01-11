import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MoviesGrid } from '../components/Body/MoviesGrid'


const get_movies_now_playing =async ()=>{


    const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing?language=es&api_key=d9d559e0133b604a0108b3c1a3792593"
      );
      if (data) {
        return data.results.map((e: any) => {
          return e.id;
        });
      } else return null;
}

export const NowPlaying = () => {
    const [movies,setMovies]=useState([]);
    useEffect(()=>{
        
get_movies_now_playing().then(res=>{setMovies(res)}).catch(err=>{setMovies([])  })   
        

    },[])

    return (
        <div className="page">
          <h1 className="title">Ultimos lanzamientos</h1>
            <MoviesGrid movies={movies} />
        </div>
    )
}
