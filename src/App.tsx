import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { NowPlaying } from "./pages/NowPlaying";
import { SearchMovie } from "./pages/SearchMovie";

const App: React.FC = () => {
  return (
    <>
    <Router>

      <NavBar />
    
      <Route exact path="/">
        <NowPlaying />
      </Route>

      <Route path="/search/:q" component={SearchMovie} />
        

    </Router>
    </>
  );
};

export default App;
