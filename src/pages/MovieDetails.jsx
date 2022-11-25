import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { state: movieDetails } = useLocation();
  const [videoKey, setVideoKey] = useState("");
  const { id, title } = movieDetails;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const videoUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`;

  console.log(movieDetails);

  const getMovieVideos = async () => {
    try {
      const videos = await axios(videoUrl);
      setVideoKey(videos.data.results[0].key);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

  console.log(videoKey);

  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div className="w-10/12 md:w-3/5 mx-auto my-3">
        <div className="ratio ratio-16x9">
          <iframe
            className="rounded-l"
            src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default MovieDetails;
