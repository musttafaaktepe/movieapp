import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SerchBar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageChange from "../components/PageChange";

const Main = () => {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const [dataMovies, setDataMovies] = useState({});

  const getMovies = async () => {
    const dataMovies = await axios(url);
    setDataMovies(dataMovies);
  };

  useEffect(() => {
    getMovies();
  }, []);
 
  return (
    <div>
     <SearchBar />
      <MovieCard dataMovies={dataMovies}/>
      <PageChange/>
    </div>
  );
};

export default Main;
