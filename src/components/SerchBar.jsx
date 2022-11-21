import React from "react";
import { TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";
// import { Button } from "bootstrap";

const SerchBar = () => {
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
        />
        <Button sx={{ height: "2.5rem", margin:"0.8rem !important", width:"5.5rem !important"}}  variant="contained">
          Search
        </Button>
      </Box>
    </div>
  );
};

export default SerchBar;
