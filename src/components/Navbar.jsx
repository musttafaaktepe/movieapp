import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className="d-flex justify-content-between">
            <div>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, cursor: "pointer" }}
                onClick={()=>navigate("/")}
              >
                
                Movie App{" "}
              </Typography>
            </div>
            <div>
              <Button
                onClick={() => navigate("/login")}
                sx={{ fontSize: "large" }}
                color="inherit"
              >
                Login
              </Button>
              <Button sx={{ fontSize: "large" }} color="inherit" onClick={() => navigate("/register")}>
                Register
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
