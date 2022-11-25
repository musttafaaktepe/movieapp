import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SerchBar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PageChange from "../components/PageChange";
// import { toastWarnNotify } from "../helpers/ToastNotify";

const Main = () => {
  const [dataMovies, setDataMovies] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [searchMovie, setSearchMovie] = useState("");
  const [totalpages, setTotalPages] = useState(1)

  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
  const urlNewMovie = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchMovie}&page=${pageNumber}`;

  const getMovies = async () => {
    const dataMovies = await axios(url);
    setDataMovies(dataMovies);
    setTotalPages(dataMovies.data.total_pages)
  };

  const searchMovies = async () => {
    const searchMovies = await axios(urlNewMovie);
    setDataMovies(searchMovies);
    console.log(searchMovies);
  };

  useEffect(() => {
    searchMovie ? searchMovies() : getMovies();
  }, [pageNumber]);

  return (
    <div>
      <SearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        searchMovies={searchMovies}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
      />
      <MovieCard dataMovies={dataMovies} />
      <PageChange pageNumber={pageNumber} setPageNumber={setPageNumber} totalpages={totalpages} searchMovies={searchMovies}/>
    </div>
  );
};

export default Main;
