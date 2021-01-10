import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { propTypes } from "../../interfaces/proptypes";
import { MovieItem } from "../MovieItem/movieitem";
const moviesMap :(arr:[],show_all:boolean,show_switch:()=>void)=>any = (arr, show_all ,show_switch ) => {
  const _arr = [...arr];
  if (!show_all) {
     return (<>{_arr.map((e: any, index: number) => {
       index++;
      if (index < 10) {
         return <MovieItem
            key={e}
            movie_id={e}
          />
        
      }
      else return <Fragment key={e}></Fragment>
      
    })} <MovieItem movie_id={-1} 
    onClick={()=>{show_switch()}}/> </>)
  } else {
    return _arr.map((e: any) => {
      return (
        <MovieItem
          // img={"https://image.tmdb.org/t/p/w500" + e.poster_path}
          key={e}
          // title={e.title}
          // overview={e.overview}
          movie_id={e}
        />
      );
    });
  }
 
};

const getLastMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=es&api_key=d9d559e0133b604a0108b3c1a3792593"
  );
  if (data) {
    return data.results.map((e: any) => {
      return e.id;
    });
  } else return null;
};

export const SSbody: React.FC<propTypes> = ({ className }) => {
  const [movies, setMovies]: [[], any] = useState([]);
  const [show_all,change_show_all] = useState(false);
  
  useEffect(() => {
    getLastMovies()
      .then((e) => {
        setMovies(e);
      })
      .catch((err) => setMovies([])); 
  }, []);

  return (
    <main className={className}>
      <h2>Ultimos Lanzamientos</h2>
      <section className="movies">
        {movies.length !== 0 ? moviesMap(movies,show_all,()=>{change_show_all(!show_all)}) : "Cargando.."}
      </section>
    </main>
  );
};
export const Body = styled(SSbody)`
  & {
    background: #444449;
    height: auto;
    padding: 2rem;
  }
  h2 {
    padding: 3rem;
    font-size: 2rem;
    text-align: center;
    color: #e2e2e2;
  }
  .movies {
    display: grid;
    justify-content: center;
    --movie-width: 350px;
    grid-template-columns: repeat(auto-fit, var(--movie-width));
    column-gap: 5rem;
  }
  @media screen and (min-width: 800px) and (max-width: 1300px) {
    .movies {
      --movie-width: 200px;
      grid-template-columns: repeat(auto-fit, var(--movie-width));
      column-gap: 2rem;
    }
  }
  @media screen and (max-width: 800px) {
    padding: 0rem;
    .movies {
      column-gap: 10px;
      --movie-width: 120px;
      grid-template-columns: repeat(auto-fit, var(--movie-width));
    }
  }
`;
