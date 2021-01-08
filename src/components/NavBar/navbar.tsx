import React from "react";
import styled from "styled-components";
interface propTypes {
  className?: string | any;
}

export const SSnavbar: React.FC<propTypes> = ({ className }) => {
  return (
    <nav className={className}>
      <h1 className="title">Movies</h1>
      <div className="navbar-end">
        <div className="navbar-item">
          <a href="https://developers.themoviedb.org/3">API </a>{" "}
        </div>
        <div className="navbar-item">
          <a href="https://developers.themoviedb.org/3">GitHub </a>
        </div>
      </div>
    </nav>
  );
};
const NavBar = styled(SSnavbar)`
  & {
    height: 10vh;
    background: #2e2e2e;
    border-bottom: 10px solid #404040;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #e2e2e2;
  }
  .title {
    font-size: 48px;
    padding: 2rem;
  }
  .navbar-end {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    border-left: 10px solid #404040;
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
`;

export default NavBar;
