import React from "react";
import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const SerchBar = ({ searchMovie, setSearchMovie, setPageNumber, pageNumber, searchMovies}) => {

  const loginInformation = useSelector((state)=>state.loginInformation)


  const handleSearch =(e)=>{
    if (loginInformation){
      searchMovie && ( pageNumber === 1 ? searchMovies() : setPageNumber(1))
    }else{
      alert("please login ")
    }
  }

  const handleKeyPress =(e)=>{
    if(e.keyCode === 13){
      e.preventDefault();
      handleSearch();
    }
  }
  return (
    <div>
      <Box
        className="d-flex justify-content-center m-4"
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "20ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Search Movie..."
          variant="outlined"
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          sx={{
            height: "2.5rem",
            margin: "0.8rem !important",
            width: "5.5rem !important",
          }}
          variant="contained"
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SerchBar;
