import React, { useState } from "react";
import styled from "styled-components";
import "font-awesome/css/font-awesome.css";
import { Link } from "react-router-dom";
interface propTypes {
  className?: string | any;
}

export const SSnavbar: React.FC<propTypes> = ({ className }) => {
  const [query, changeQuery] = useState("");

  return (
    <nav className={className}>
      <Link to="/">
        <h1 className="title">Movies</h1>
      </Link>
      <div className="navbar-end">
        <div className="navbar-item">
          <a href="https://developers.themoviedb.org/3">API </a>{" "}
        </div>
        <div className="navbar-item">
          <a href="https://developers.themoviedb.org/3">GitHub </a>
        </div>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (query !== "") {
            window.location.href = `/search/${query}`;
          }
        }}
        className="form"
      >
        <div className="search-box">
          <input
            onChange={(e) => changeQuery(e.target.value)}
            placeholder="Search.."
            className="search"
            type="text"
            name="q"
            id="q"
          />
          {query !== "" ? (
            <Link to={`/search/${query}`}>
              <i className="fa fa-search"></i>
            </Link>
          ) : (
            <i className="fa fa-search"></i>
          )}
        </div>
      </form>
    </nav>
  );
};
const NavBar = styled(SSnavbar)`
  & {
    height: 10vh;
    background: #242424;
    border-bottom: 10px solid #404040;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #e2e2e2;
  }
  .title {
    font-size: 48px;
    padding: 2rem;
  }
  .navbar-end {
    margin-left: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    border-left: 10px solid #404040;
    margin-right: auto;
  }
  .form {
    width: 50%;
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .form .submit {
    padding: 0.5rem;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: white;
  }
  .form .search-box {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }
  .form .search {
    padding: 0.8rem;
    padding-left: 3rem;
    background: #2e2e2e;
    border: 1px solid whitesmoke;
    border-radius: 7px;
    width: 100%;
    color: white;
    font-size: 1.2rem;
    outline: none;
  }
  .form .search-box a {
    display: flex;
    align-items: center;
  }
  .form .search-box a i,
  .form .search-box i {
    color: white;
    position: absolute;
    padding: 1rem;
    left: 0%;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #e2e2e2;
  }
  .navbar-item {
    padding: 0 2rem;
    font-size: 2rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-item:first-child {
    border-right: 10px solid #404040;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    .navbar-end {
      display: none;
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 500px) {
    .title {
      font-size: 1.8rem;
    }
    .form .search {
      padding: 0.5rem;
      padding-left: 3rem;
      font-size: .8rem;
    }
    .navbar-end {
      display: none;
      font-size: 1rem;
    }
  }
`;

export default NavBar;
