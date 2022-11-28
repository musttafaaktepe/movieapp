import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import errorimg from "../assets/errorimg.jpg"

const MovieDetails = () => {
  const navigate = useNavigate();
  const { state: movieDetails } = useLocation();
  const [videoKey, setVideoKey] = useState("");
  const {
    id,
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    vote_count,
  } = movieDetails;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  console.log(movieDetails);

  const getMovieVideos = async () => {
    try {
      const videos = await axios(videoUrl);
      setVideoKey(videos.data?.results[0]?.key);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <div className="w-10/12 md:w-3/5 mx-auto my-3">
        <div className="ratio ratio-16x9">
          <iframe
            className="rounded-xl"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="d-flex">
        <img
        alt="img"
          style={{ width: "20rem", display: "inline-block" }}
          src={
            poster_path ? 
            `https://image.tmdb.org/t/p/w1280${poster_path}` : errorimg
          }
        />

        <div className="d-flex flex-column border border-primary justify-content-between ">
          <p>overview:{overview}</p>
          <div>
            <p>elease_date: {release_date} </p>
            <p>vote_average : {vote_average} </p>
            <p>vote_count : {vote_count} vote_count</p>
          </div>
        </div>
      </div>

      <button onClick={() => navigate(-2)}>Go Back</button>
    </div>
  );
};

export default MovieDetails;
