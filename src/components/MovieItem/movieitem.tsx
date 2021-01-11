import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";


export const SSmovieitem: React.FC<{
  className?: string;
  movie_id: number;
  onClick?: (e: any) => void;
}> = ({ className, movie_id, onClick }) => {
  const [title, changeTitle] = useState("Cargando..");
  const [overview, changeOverview] = useState("Cargando..");
  const [poster, changePoster] = useState("");

  useEffect(() => {
    if (movie_id !== -1) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=d9d559e0133b604a0108b3c1a3792593&language=es`
        )
        .then((res) => {
          const { data } = res;

         
          changeOverview(data.overview);
          changeTitle(data.title);
          data.poster_path?changePoster(data.poster_path):changePoster('');
        });
    }
  }, [movie_id]);

  return (
    <div className={className}>
      {movie_id !== -1 ? (
        <>
          {poster !== "" ? (
            <img className="image" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="" />
          ) : (
            <img
              className="image"
              alt=""
              src="https://media1.tenor.com/images/556e9ff845b7dd0c62dcdbbb00babb4b/tenor.gif"
            />
          )}
          <h1 className="title">{title}</h1>
          <div className="movie-body">
            <p>{overview}</p>
          </div>
        </>
      ) : (
        <Fragment>
          <img
            className="image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Plus_symbol.svg/1200px-Plus_symbol.svg.png"
            alt=""
            onClick={(e) => {
              if (onClick) {
                onClick("uwu");
              } else {
                console.log("error");
              }
            }}
          />
          <h1
            onClick={(e) => {
              if (onClick) {
                onClick("uwu");
              } else {
                console.log("error");
              }
            }}
            className="title"
          >
            Mostrar mas..
          </h1>
        </Fragment>
      )}
    </div>
  );
};
export const MovieItem = styled(SSmovieitem)`
  & {
    display: grid;
    grid-template-rows: 500px 60px;

    overflow: hidden;
    margin-bottom: 20px;
    background: #fff;
    cursor: pointer;
    position: relative;
  }
  .image {
    height: 500px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    transition: transform 1s ease;
  }
  .title {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    font-size: 18px;
    color: white;
    background: #1b1b1b;
    z-index: 10;
  }
  &:hover .movie-body {
    opacity: 1;
  }
  &:hover .movie-body > p {
    transform: scale(1, 1);
  }
  &:hover .image {
    transform: scale(1.2, 1.2);
  }
  .movie-body {
    border-radius: var(--border) var(--border) 0 0;
    background: rgba(0, 0, 0, 0.8);
    height: 500px;
    width: var(--movie-width);
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transition: opacity 1s ease;
    opacity: 0; 
  }
  .movie-body p {
    transform: scale(0.5, 0.5);
    transition: transform 1s ease;
    height:45%;
    padding:1rem;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  @media screen and (min-width: 800px) and (max-width: 1300px) {
    & {
      grid-template-rows: 300px 60px;
    }
    .image {
      height: 300px;
    }
    .title {
      font-size: 1rem;
      padding: 0.5rem;
    }
    .movie-body {
      height: 300px;
      font-size: 12px;
      padding: 0.5rem;
    }
  }
  @media screen and (max-width: 800px) {
    & {
      grid-template-rows: 250px 60px;
    }
    .movie-body {
      height: 250px;
      font-size: 0.6rem;
      padding: 0.5rem;
    }
    .image {
      height: 250px;
    }
    .title {
      padding: 0.5rem;
      font-size: 0.7rem;
    }
  }
`;
