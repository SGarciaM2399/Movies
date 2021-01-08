import React  from "react";
import styled from "styled-components";
import { movie } from "../../interfaces/movie";

const fixedOverview: (overview: string) => string = (overview: string) => {
  if (overview.split(" ").length >= 40) {
    console.log("xD");

    return overview.split(" ").splice(0, 40).join(" ").concat("...");
  } else return overview;
};

export const SSmovieitem: React.FC<movie> = ({
  className,
  title,
  overview,
  img,
}) => {
  overview = fixedOverview(overview);

  return (
    <div className={className}>
      <img className="image" src={img} alt="" />
      <h1 className="title">{title}</h1>
      <div className="movie-body">
        <p>{overview}</p>
      </div>
    </div>
  );
};
export const MovieItem = styled(SSmovieitem)`
  & {
    display: grid;
    grid-template-rows: 500px 60px;

    overflow: hidden;
    margin-bottom: 100px;
    background: #fff;
    cursor: pointer;
  }
  .image {
    height: 500px;
    width: 100%;
    overflow: hidden;
    object-fit: cover;
    transition: all 1s ease;
  }
  .title {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    font-size: 18px;
    background: #fff;
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
    width: 300px;
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    transition: all 1s ease;
    opacity: 0;
  }
  .movie-body p {
    transform: scale(0.5, 0.5);
    transition: all 1s ease;
  }
`;
