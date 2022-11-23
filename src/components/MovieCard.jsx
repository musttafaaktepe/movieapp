import Card from "react-bootstrap/Card";
import { MovieCardOverview } from "./MovieCard.styled";
import "./moviecard.css";

const MovieCard = ({ dataMovies: { data } }) => {
  console.log(data);
  return (
    <div
      className=" text-center d-flex flex-row justify-content-center flex-wrap"
      style={{ gap: "1rem" }}
    >
      {data?.results.map((result) => {
        const { backdrop_path, original_title, overview } = result;
        return (
          <>
            <Card
              className="card"
              style={{
                width: "27rem",
                height: "28rem",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Card.Img
                className="movie-img"
                style={{ height: "65%" }}
                variant="top"
                src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              />
              <Card.Body>
                <Card.Text>{original_title}</Card.Text>
              </Card.Body>
              <MovieCardOverview className="overview">
                <p>{overview}</p>
              </MovieCardOverview>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default MovieCard;
