import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { propTypes } from "../../interfaces/proptypes";
import { MovieItem } from "../MovieItem/movieitem";
const moviesMap = (arr: any) => {
  return arr.map((e: any) => {
    return (
      <>
        <MovieItem
          img={"https://image.tmdb.org/t/p/w500" + e.poster_path}
          key={e.id}
          title={e.title}
          overview={e.overview}
          id={e.id}
        />
      </>
    );
  });
};

const getData = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=es&api_key=d9d559e0133b604a0108b3c1a3792593"
  );
  if (data) {
    return data.results;
  } else return null;
};

export const SSbody: React.FC<propTypes> = ({ className }) => {
  const [movies, setMovies]: any = useState(null);
  useEffect(() => {
    getData()
      .then((e) => {
        console.log(e);
        setMovies(e);
        console.log(movies);
      })
      .catch((err) => setMovies(null));
  }, [movies]);

  return (
    <main className={className}>
      <h2>Ultimos Lanzamientos</h2>
      <section className="movies">
        {movies ? moviesMap(movies) : "Cargando.."}
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
    color: #e2e2e2;
  }
  .movies {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 300px);
    column-gap: 5rem;
  }
`;
