import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MoviesGrid } from '../components/Body/MoviesGrid'


const lookup_movies = async (query:string)=>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=d9d559e0133b604a0108b3c1a3792593&language=es&page=1&include_adult=false`)
    if(data){
        return data.results.map((e: any) => {
            return e.id;
          });
    }
    else return null;
}

export const SearchMovie :React.FC<{match?:any}> = ({match}) => {

    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        lookup_movies(match.params.q).then(res=>{
            setMovies(res);
        }).catch(err=>{setMovies([])})
    },[match.params.q])


    return (
        <div className="page">
            <h1 className="title">Resultado de busqueda:</h1>
          {movies.length>0?<MoviesGrid movies={movies}/>:<div style={{backgroundColor:'#444449',color:'whitesmoke',height:'89.9%',padding:'2rem'}}>No se encontraron resultados...</div> }
        </div>
    )
}
