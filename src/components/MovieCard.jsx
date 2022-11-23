import { useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useState } from "react";

const MovieCard = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

  const [dataMovies, setDataMovies] = useState({})

  const getMovies = async ()=>{
    const {data:dataMovies}= await axios(url)
    setDataMovies(dataMovies)
  }

  useEffect(()=>{
    getMovies();
  },[])
   
return(
  <div>
    {dataMovies?.results.map((result)=>{
    const {backdrop_path, orginal_title, overview} = result
    return(      
      <>
      <Card>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
        <Card.Body>
          <Card.Text>
            {orginal_title}
          </Card.Text>
        </Card.Body>
      </Card>
      </>
    )
  })}       
    </div>
  )
};

export default MovieCard;
