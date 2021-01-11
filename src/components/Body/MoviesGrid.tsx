import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { MovieItem } from "../MovieItem/movieitem";
const moviesMap :(arr:[number],show_all:boolean,show_switch:()=>void)=>any = (arr, show_all ,show_switch ) => {
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


export const SSMoviesGrid: React.FC<{movies:any, className?:string}> = ({ className ,movies}) => {
  const [show_all,change_show_all] = useState(false);
  
  return (
    <main className={className}>
      <section className="movies">
        { moviesMap(movies,show_all,()=>{change_show_all(!show_all)}) }
      </section>
    </main>
  );
};
export const MoviesGrid = styled(SSMoviesGrid)`
  & {
    background: #444449;
    min-height:89.95%;
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
